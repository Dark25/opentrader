import { exchanges } from '@bifrost/exchanges';
import { Logger } from '@nestjs/common';
import { OrderNotFound } from 'ccxt';
import { subHours } from 'date-fns';
import { xprisma } from 'src/trpc/prisma';
import { OrderSynchronizerWatcher } from './order-synchronizer-watcher.abstract';

/**
 * This is a fallback for `OrderSynchronizerWsWatcher`.
 *
 * Sometimes WebSocket connection me be lost for a while, or the backend server
 * was down. During this time, one of the orders could have been filled.
 */
export class OrderSynchronizerPollingWatcher extends OrderSynchronizerWatcher {
  protected readonly logger = new Logger(OrderSynchronizerPollingWatcher.name);

  protected async watchOrders() {
    while (this.enabled) {
      const ordersCount = await this.syncOrders();

      // timeout 60s
      this.logger.debug(`Synced ${ordersCount} orders. Timeout for 60s`);
      await new Promise((resolve) => setTimeout(resolve, 60000));
    }
  }

  private async syncOrders() {
    // Find orders with `status == Placed` and the last sync was >1 hour ago.
    const ONE_HOUR_AGO = subHours(new Date(), 1);

    this.logger.debug('Querying orders which last sync was done >1 hour ago');
    const orders = await xprisma.order.findMany({
      where: {
        status: 'Placed',
        syncedAt: {
          lt: ONE_HOUR_AGO,
        },
      },
      orderBy: {
        syncedAt: 'asc',
      },
      include: {
        smartTrade: {
          include: {
            exchangeAccount: true,
          },
        },
      },
    });

    for (const order of orders) {
      if (!order.exchangeOrderId) {
        throw new Error('Order: Missing `exchangeOrderId`');
      }

      const { smartTrade } = order;
      const { exchangeAccount } = smartTrade;
      const exchange = exchanges[exchangeAccount.exchangeCode](
        exchangeAccount.credentials,
      );

      this.logger.debug(
        `Synchronize order #${order.id}: exchangeOrderId "${order.exchangeOrderId}": price: ${order.price}: status: ${order.status}`,
      );
      try {
        const exchangeOrder = await exchange.getLimitOrder({
          orderId: order.exchangeOrderId,
          symbol: smartTrade.exchangeSymbolId,
        });

        await xprisma.order.updateSyncedAt(order.id);

        if (exchangeOrder.status === 'filled') {
          const statusChanged = order.status !== 'Filled';
          if (statusChanged) {
            this.emit('onFilled', [exchangeOrder, order]);
          }
        } else if (exchangeOrder.status === 'canceled') {
          const statusChanged = order.status !== 'Canceled';
          if (statusChanged) {
            this.emit('onCanceled', [exchangeOrder, order]);
          }
        }
      } catch (err) {
        if (err instanceof OrderNotFound) {
          await xprisma.order.updateStatus('Deleted', order.id);

          this.logger.debug(
            `Order not found on the exchange. Change status to "Deleted"`,
          );
        } else {
          throw err;
        }
      }
    }

    return orders.length;
  }
}