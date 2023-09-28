import { IExchange } from '@bifrost/exchanges';
import { HttpService } from '@nestjs/axios';
import { INestApplication, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test } from '@nestjs/testing';
import { AppModule2 } from 'src/app.module';
import { FirestoreService } from 'src/core/db/firestore/firestore.service';
import { UserRepository } from 'src/core/db/firestore/repositories/user/user.repository';
import { IGetLimitOrderRequest, IGetLimitOrderResponse } from '@bifrost/types';
import {
  gridBotInitialInvestment,
  gridBotSettings,
} from 'src/e2e/grid-bot/bot-settings';
import { exchangeAccountMock } from 'src/e2e/grid-bot/exchange-account';
import { gridBotE2EHistoryData } from 'src/e2e/grid-bot/history-data';
import { GridBotE2EHistoryData } from 'src/e2e/grid-bot/types';
import { mapDealToE2EDeal } from 'src/e2e/grid-bot/utils/mappers/map-deal-to-e2e-deal';
import { mapE2ELimitOrderToLimitOrder } from 'src/e2e/grid-bot/utils/mappers/map-e2e-limit-order-to-limit-order';
import { CreateBotRequestBodyDto } from 'src/grid-bot/dto/create-bot/create-bot-request-body.dto';

import { CreateBotResponseBodyDto } from 'src/grid-bot/dto/create-bot/create-bot-response-body.dto';
import { SyncBotQueryParamsDto } from 'src/grid-bot/dto/sync-bot/sync-bot-query-params.dto';
import {
  GridBotServiceFactory,
  GridBotServiceFactorySymbol,
} from 'src/grid-bot/grid-bot-service.factory';
import { GridBotService } from 'src/grid-bot/grid-bot.service';
import * as request from 'supertest';
import { user } from './e2e/grid-bot/user';

function* e2eDataGenerator(): Generator<GridBotE2EHistoryData> {
  for (const day of gridBotE2EHistoryData) {
    yield day;
  }

  // Always return history data for the last day if there are no more days left
  while (true) {
    yield gridBotE2EHistoryData[gridBotE2EHistoryData.length - 1];
  }
}

const firebaseAuthorizationHeader = () => ({
  Authorization: 'Bearer master_key',
});

jest.mock('src/grid-bot/utils/orders/generateUniqClientOrderId');
jest.mock('src/common/helpers/delay');

describe('AppController', () => {
  let app: INestApplication;
  let e2eDataGen = e2eDataGenerator();
  const e2eData: { current: GridBotE2EHistoryData } = {
    current: e2eDataGen.next().value,
  };

  let firestoreService: FirestoreService;

  const exchangeService: Partial<IExchange> = {
    getMarketPrice: async ({ symbolId }) => {
      return {
        symbol: symbolId,
        price: e2eData.current.price,
        timestamp: 0,
      };
    },
    placeLimitOrder: async (request) => {
      return {
        orderId: `mock_${request.clientOrderId}`, // maybe use uuid
        clientOrderId: request.clientOrderId,
      };
    },
    getLimitOrder: async (
      params: IGetLimitOrderRequest,
    ): Promise<IGetLimitOrderResponse> => {
      const limitOrder = e2eData.current.limitOrders.find(
        (order) => order.clientOrderId === params.clientOrderId,
      );

      if (!limitOrder) {
        throw new Error(
          `getLimitOrder: limit order ${params.clientOrderId} not found in e2eData`,
        );
      }

      return mapE2ELimitOrderToLimitOrder(limitOrder);
    },
    cancelLimitOrder: async (request) => {
      return {
        orderId: `mock_${request.clientOrderId}`, // maybe use uuid,
        clientOrderId: request.clientOrderId,
      };
    },
    accountAssets: async () => {
      return [
        {
          currency: gridBotSettings.baseCurrency,
          availableBalance: 10000,
          balance: 10000,
        },
        {
          currency: gridBotSettings.quoteCurrency,
          availableBalance: 10000,
          balance: 10000,
        },
      ];
    },
  };

  const userRepository: Partial<UserRepository> = {
    async findOneByIdToken() {
      return user;
    },
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule2],
    })
      .overrideProvider(DefaultExchangeServiceFactorySymbol)
      .useValue(exchangeService)
      .overrideProvider(GridBotServiceFactorySymbol)
      .useFactory({
        factory: (
          httpService: HttpService,
          configService: ConfigService,
          firestoreService: FirestoreService,
          logger: Logger,
        ): GridBotServiceFactory => {
          return {
            create: () => {
              return new GridBotService(
                exchangeService as IExchange, // I know what I am doing
                firestoreService,
                logger,
              );
            },
            fromExchangeAccount: () => {
              return new GridBotService(
                exchangeService as IExchange, // I know what I am doing
                firestoreService,
                logger,
              );
            },
            fromExchangeAccountId: async () => {
              return new GridBotService(
                exchangeService as IExchange, // I know what I am doing
                firestoreService,
                logger,
              );
            },
            fromBotId: async () => {
              return new GridBotService(
                exchangeService as IExchange, // I know what I am doing
                firestoreService,
                logger,
              );
            },
          };
        },
        inject: [HttpService, ConfigService, FirestoreService, Logger],
      })
      .overrideProvider(UserRepository)
      .useValue(userRepository)
      .compile();

    app = moduleRef.createNestApplication();

    // this service is used as a helper to retrieve the deals from Firestore
    // and compare them with expected result
    firestoreService = moduleRef.get<FirestoreService>(FirestoreService);

    e2eDataGen = e2eDataGenerator();
    e2eData.current = e2eDataGen.next().value;

    await app.init();
  });

  describe('Create and start bot', () => {
    it(`/POST grid-bot/create`, async () => {
      const requestBody: CreateBotRequestBodyDto = {
        ...gridBotSettings,
        exchangeAccountId: exchangeAccountMock.id,
      };
      const expectedResponse: CreateBotResponseBodyDto = {
        bot: {
          id: gridBotSettings.id,
          name: gridBotSettings.name,
          baseCurrency: gridBotSettings.baseCurrency,
          quoteCurrency: gridBotSettings.quoteCurrency,
          gridLines: gridBotSettings.gridLines,
          initialInvestment: gridBotInitialInvestment, // can't know the exact value

          enabled: false,
          deals: [],
          createdAt: 0, // can't know the exact value
          userId: user.uid,
          exchangeAccountId: exchangeAccountMock.id,
        },
      };
      delete expectedResponse.bot.createdAt;
      delete expectedResponse.bot.initialInvestment;

      await request(app.getHttpServer())
        .post('/grid-bot/create')
        .set(firebaseAuthorizationHeader())
        .send(requestBody)
        .expect(201)
        .expect((res) => {
          const body: CreateBotResponseBodyDto = res.body;

          expect(body).toMatchObject(expectedResponse);
        });
    });

    it('/PUT grid-bot/start', async () => {
      await request(app.getHttpServer())
        .put(`/grid-bot/start/${gridBotSettings.id}`)
        .set(firebaseAuthorizationHeader())
        .expect(200);

      const { deals } = await firestoreService.gridBot.findOne(
        gridBotSettings.id,
      );
      const dealsSimplified = deals.map((deal) => mapDealToE2EDeal(deal));

      expect(dealsSimplified).toStrictEqual(e2eData.current.deals.reverse());
    });

    describe('/PATH grid-bot/sync', () => {
      const queryParams: SyncBotQueryParamsDto = {
        botId: gridBotSettings.id,
      };

      beforeAll(() => {
        e2eDataGen = e2eDataGenerator();
      });

      beforeEach(() => {
        e2eData.current = e2eDataGen.next().value;
      });

      // данные за первый исторический день (`i = 0`) предназначены для бота в момент старта `GET /grid-bot/start`,
      // поэтому начинаем синк с `i = 1`
      for (let i = 1; i < gridBotE2EHistoryData.length - 1; i++) {
        // `e2eData.time` возвращает всегда одно и тоже время (первый элемент), хз почему.
        // вытаскиваю напрямую из массива, вот такой воркароунд
        it(`Day #${i + 1}: ${gridBotE2EHistoryData[i].time}`, async () => {
          await request(app.getHttpServer())
            .patch('/grid-bot/sync')
            .set(firebaseAuthorizationHeader())
            .query(queryParams)
            .expect(200)
            .send();

          const { deals } = await firestoreService.gridBot.findOne(
            gridBotSettings.id,
          );
          const dealsSimplified = deals.map((deal) => mapDealToE2EDeal(deal));
          const dealsSimplifiedSorted = [...dealsSimplified].sort((a, b) =>
            a.id > b.id ? 1 : -1,
          );
          const e2eDealsSorted = [...e2eData.current.deals].sort((a, b) =>
            a.id > b.id ? 1 : -1,
          );

          expect(dealsSimplifiedSorted).toEqual(e2eDealsSorted);
        });
      }
    });

    it('/PUT /grid-bot/stop', async () => {
      await request(app.getHttpServer())
        .put(`/grid-bot/stop/${gridBotSettings.id}`)
        .set(firebaseAuthorizationHeader())
        .expect(200);
    });

    it.todo('clean bot.events');
  });

  afterAll(async () => {
    await app.close();
  });
});