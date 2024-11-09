/**
 * Copyright 2024 bludnic
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Repository URL: https://github.com/bludnic/opentrader
 */
import { rsi, ema, sma } from "@opentrader/indicators";
import { aggregateCandles, IndicatorsValues } from "@opentrader/tools";
import { OrderStatusEnum, OrderType, XEntityType, XOrderSide } from "@opentrader/types";
import { TradeService, SmartTradeService } from "./types/index.js";
import type { TBotContext } from "./types/index.js";
import { BaseEffect, EffectType, USE_DCA, USE_INDICATOR } from "./effects/types/index.js";
import {
  buy,
  useTrade,
  useArbTrade,
  sell,
  useExchange,
  useSmartTrade,
  getSmartTrade,
  cancelSmartTrade,
  createSmartTrade,
  replaceSmartTrade,
  useMarket,
  useCandle,
  useRSI,
  useDca,
  useIndicator,
  useIndicators,
} from "./effects/index.js";
import {
  BUY,
  CANCEL_SMART_TRADE,
  CREATE_SMART_TRADE,
  GET_SMART_TRADE,
  REPLACE_SMART_TRADE,
  SELL,
  USE_EXCHANGE,
  USE_INDICATORS,
  USE_SMART_TRADE,
  USE_TRADE,
  USE_ARB_TRADE,
  USE_MARKET,
  USE_CANDLE,
  USE_RSI_INDICATOR,
} from "./effects/index.js";

export const effectRunnerMap: Record<
  EffectType,
  (effect: BaseEffect<any, any, any>, ctx: TBotContext<any>) => unknown
> = {
  [USE_SMART_TRADE]: runUseSmartTradeEffect,
  [GET_SMART_TRADE]: runGetSmartTradeEffect,
  [CANCEL_SMART_TRADE]: runCancelSmartTradeEffect,
  [CREATE_SMART_TRADE]: runCreateSmartTradeEffect,
  [REPLACE_SMART_TRADE]: runReplaceSmartTradeEffect,
  [USE_TRADE]: runUseTradeEffect,
  [USE_ARB_TRADE]: runUseArbTradeEffect,
  [USE_DCA]: runUseDcaEffect,
  [BUY]: runBuyEffect,
  [SELL]: runSellEffect,
  [USE_EXCHANGE]: runUseExchangeEffect,
  [USE_INDICATOR]: runUseIndicatorEffect,
  [USE_INDICATORS]: runUseIndicatorsEffect,
  [USE_MARKET]: runUseMarketEffect,
  [USE_CANDLE]: runUseCandleEffect,
  [USE_RSI_INDICATOR]: runUseRsiIndicatorEffect,
};

async function runUseSmartTradeEffect(
  effect: ReturnType<typeof useSmartTrade>,
  ctx: TBotContext<any>,
): Promise<SmartTradeService> {
  const smartTrade = await ctx.control.getOrCreateSmartTrade(effect.ref, {
    ...effect.payload,
    type: "Trade",
  });

  return new SmartTradeService(effect.ref, smartTrade);
}

async function runGetSmartTradeEffect(effect: ReturnType<typeof getSmartTrade>, ctx: TBotContext<any>) {
  const smartTrade = await ctx.control.getSmartTrade(effect.ref);

  return smartTrade ? new SmartTradeService(effect.ref, smartTrade) : null;
}

async function runCancelSmartTradeEffect(effect: ReturnType<typeof cancelSmartTrade>, ctx: TBotContext<any>) {
  return ctx.control.cancelSmartTrade(effect.ref);
}

async function runCreateSmartTradeEffect(effect: ReturnType<typeof createSmartTrade>, ctx: TBotContext<any>) {
  const smartTrade = await ctx.control.createSmartTrade(effect.ref, {
    ...effect.payload,
    type: "Trade",
  });

  return new SmartTradeService(effect.ref, smartTrade);
}

async function runReplaceSmartTradeEffect(effect: ReturnType<typeof replaceSmartTrade>, ctx: TBotContext<any>) {
  const smartTrade = await ctx.control.replaceSmartTrade(effect.ref, effect.payload);

  return new SmartTradeService(effect.ref, smartTrade);
}

async function runUseTradeEffect(effect: ReturnType<typeof useTrade>, ctx: TBotContext<any>) {
  const { payload, ref } = effect;

  let buy;
  const sell =
    payload.takeProfitType === OrderType.Market
      ? {
          type: OrderType.Market,
          status: OrderStatusEnum.Idle,
        }
      : payload.tp
        ? {
            type: OrderType.Limit,
            status: OrderStatusEnum.Idle,
            price: payload.tp,
          }
        : undefined;

  /**
   * Side "sell" means that the base asset was bought the user directly on the exchange.
   * So, the bot should only sell it.
   * We need to create a smart trade with a buy order already filled.
   * The bought "price" is mandatory, to calculate the profit after trade finished.
   */
  if (payload.side === "sell") {
    if (!payload.price) {
      throw new Error(`Bought "price" is required for sell only orders`);
    }

    buy = {
      type: OrderType.Limit,
      price: payload.price,
      status: OrderStatusEnum.Filled,
    };
  } else {
    // side == "buy"
    const entryType = payload.entryType || OrderType.Limit;

    switch (entryType) {
      case "Limit":
        if (!payload.price) {
          throw new Error(`"price" is required for Limit entry order`);
        }

        buy = {
          type: OrderType.Limit,
          status: OrderStatusEnum.Idle,
          price: payload.price,
        };
        break;
      case "Market":
        buy = {
          type: OrderType.Market,
          status: OrderStatusEnum.Idle,
        };
        break;
      default:
        throw new Error(`Invalid entry type: ${payload.entryType}`);
    }
  }

  const smartTrade = await ctx.control.getOrCreateSmartTrade(ref, {
    type: "Trade",
    quantity: payload.quantity,
    buy,
    sell,
  });

  return new SmartTradeService(effect.ref, smartTrade);
}

async function runUseArbTradeEffect(effect: ReturnType<typeof useArbTrade>, ctx: TBotContext<any>) {
  const { payload, ref } = effect;

  const smartTrade = await ctx.control.getOrCreateSmartTrade(ref, {
    type: "ARB",
    quantity: payload.quantity,
    buy: {
      exchange: payload.exchange1,
      symbol: payload.symbol,
      type: payload.price ? OrderType.Limit : OrderType.Market,
      price: payload.price,
      status: OrderStatusEnum.Idle,
    },
    sell: {
      exchange: payload.exchange2,
      symbol: payload.symbol,
      type: payload.tp ? OrderType.Limit : OrderType.Market,
      price: payload.tp,
      status: OrderStatusEnum.Idle,
    },
  });

  return new SmartTradeService(effect.ref, smartTrade);
}

async function runUseDcaEffect(effect: ReturnType<typeof useDca>, ctx: TBotContext<any>) {
  const { payload, ref } = effect;

  const smartTrade = await ctx.control.getOrCreateSmartTrade(ref, {
    type: "DCA",
    quantity: payload.quantity,
    buy: {
      symbol: payload.symbol,
      type: payload.price ? OrderType.Limit : OrderType.Market,
      price: payload.price,
      status: OrderStatusEnum.Idle,
    },
    sell: {
      symbol: payload.symbol,
      type: OrderType.Limit,
      relativePrice: payload.tpPercent,
      status: OrderStatusEnum.Idle,
    },
    // Safety orders
    additionalOrders: payload.safetyOrders.map((order) => ({
      relativePrice: order.relativePrice,
      quantity: order.quantity,
      symbol: payload.symbol,
      type: OrderType.Limit,
      side: XOrderSide.Buy,
      entityType: XEntityType.SafetyOrder,
    })),
  });

  return new SmartTradeService(effect.ref, smartTrade);
}

async function runBuyEffect(effect: ReturnType<typeof buy>, ctx: TBotContext<any>) {
  const { payload, ref } = effect;

  let buy;

  if (payload.orderType === OrderType.Market) {
    buy = {
      type: OrderType.Market,
      status: OrderStatusEnum.Idle,
    };
  } else {
    // OrderType.Limit
    if (!payload.price) {
      throw new Error(`"price" is required for Limit buy orders`);
    }

    buy = {
      type: OrderType.Limit,
      status: OrderStatusEnum.Idle,
      price: payload.price,
    };
  }

  let smartTrade = await ctx.control.getOrCreateSmartTrade(ref, {
    type: "Trade",
    quantity: payload.quantity,
    buy,
  });

  if (smartTrade.sell?.status === OrderStatusEnum.Filled) {
    console.info("Trade replaced. Reason: Sell filled");

    smartTrade = await ctx.control.createSmartTrade(ref, {
      type: "Trade",
      quantity: payload.quantity,
      buy,
    });
  }

  return new TradeService(ref, smartTrade);
}

async function runSellEffect(effect: ReturnType<typeof sell>, ctx: TBotContext<any>) {
  const { payload, ref } = effect;

  let smartTrade = await ctx.control.getSmartTrade(ref);
  if (!smartTrade) {
    console.info("Skip selling effect. Reason: Not bought before");

    return null;
  }

  if (smartTrade.buy.status === OrderStatusEnum.Idle || smartTrade.buy.status === OrderStatusEnum.Placed) {
    console.info("Skip selling effect. Reason: Buy order not filled yet");

    return null;
  }

  if (smartTrade.sell) {
    console.info("Skip selling advice. Reason: Already selling");

    return null;
  }

  if (payload.orderType !== OrderType.Market && !payload.price) {
    throw new Error(`"price" is required for Limit sell orders`);
  }

  smartTrade = await ctx.control.updateSmartTrade(ref, {
    sell: {
      type: payload.orderType || OrderType.Limit,
      status: OrderStatusEnum.Idle,
      price: payload.price,
    },
  });

  if (!smartTrade) {
    console.warn("Skip selling advice. Smart trade not found.");

    return null;
  }

  return new TradeService(effect.ref, smartTrade);
}

async function runUseExchangeEffect(effect: ReturnType<typeof useExchange>, ctx: TBotContext<any>) {
  const label = effect.payload;

  if (label) {
    return ctx.control.getExchange(label);
  }

  return ctx.exchange;
}

async function runUseMarketEffect(_effect: ReturnType<typeof useMarket>, ctx: TBotContext<any>) {
  return ctx.market;
}

async function runUseCandleEffect(effect: ReturnType<typeof useCandle>, ctx: TBotContext<any>) {
  const index = effect.payload;

  if (index >= 0) {
    return ctx.market.candles[index];
  }

  return ctx.market.candles[ctx.market.candles.length + index];
}

async function runUseIndicatorEffect(
  effect: ReturnType<typeof useIndicator>,
  ctx: TBotContext<any>,
): Promise<number[]> {
  const { name, barSize, options } = effect.payload;

  if (ctx.market.candles.length === 0) {
    console.warn(`[useIndicator] Candles are empty. Skipping ${name} calculation.`);

    return [];
  }

  switch (name) {
    case "RSI":
      return rsi(options, aggregateCandles(ctx.market.candles, barSize));
    case "SMA":
      return sma(options, aggregateCandles(ctx.market.candles, barSize));
    case "EMA":
      return ema(options, aggregateCandles(ctx.market.candles, barSize));
    default:
      console.warn(`[useIndicator] Unsupported indicator ${name}`);
      return [];
  }
}

async function runUseIndicatorsEffect(
  effect: ReturnType<typeof useIndicators>,
  ctx: TBotContext<any>,
): Promise<IndicatorsValues> {
  const indicators = effect.payload;

  const result: IndicatorsValues = {};

  for (const [name, timeframe, options] of indicators) {
    let values: number[] = [];

    switch (name) {
      case "RSI":
        values = await rsi(options, aggregateCandles(ctx.market.candles, timeframe));
        break;
      case "SMA":
        values = await sma(options, aggregateCandles(ctx.market.candles, timeframe));
        break;
      case "EMA":
        values = await ema(options, aggregateCandles(ctx.market.candles, timeframe));
        break;
      default:
        console.warn(`[useIndicators] Unsupported indicator ${name}`);
        break;
    }

    if (!result[name]) result[name] = {};
    if (!result[name][timeframe]) result[name][timeframe] = {};

    result[name][timeframe][JSON.stringify(options)] = values.at(-1)!;
  }

  return result;
}

async function runUseRsiIndicatorEffect(effect: ReturnType<typeof useRSI>, ctx: TBotContext<any>): Promise<number> {
  if (ctx.market.candles.length === 0) {
    console.warn("[UseRSI] Candles are empty. Skipping RSI calculation. Returned NaN.");

    return NaN;
  }

  const periods = effect.payload;
  const rsiValues = await rsi({ periods }, ctx.market.candles);

  return rsiValues[rsiValues.length - 1];
}
