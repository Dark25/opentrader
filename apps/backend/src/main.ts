import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { GLOBAL_PREFIX } from 'src/common/constants';
import { loadMarkets } from 'src/load-markets';
import { TrpcMiddleware } from 'src/trpc/trpc.middleware';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const logger = app.get(WINSTON_MODULE_NEST_PROVIDER);
  // app.useLogger(logger);

  app.setGlobalPrefix(GLOBAL_PREFIX);
  app.enableCors();

  // tRPC
  const trpc = app.get(TrpcMiddleware);
  trpc.applyMiddleware(app);

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Bifrost Swagger UI')
    .setDescription(
      `Bifrost API Schema <a href="/${GLOBAL_PREFIX}/swagger-json" target="_blank">schema.json</a>`,
    )
    .setVersion('dev')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  });
  SwaggerModule.setup(`${GLOBAL_PREFIX}/swagger`, app, document);

  app.enableShutdownHooks();
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      whitelist: true,
    }),
  );

  // app.useGlobalFilters(new TwitterApiExceptionFilter(logger));
  // app.useGlobalFilters(new HttpExceptionFilter());

  await loadMarkets();

  await app.listen(4000);
}
bootstrap();