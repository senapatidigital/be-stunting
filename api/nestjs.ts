import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';  // Path relatif ke src
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { Handler } from 'aws-lambda';

let server;

async function bootstrap() {
  const expressApp = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  app.enableCors();
  app.setGlobalPrefix('api/v1');

  await app.init();
  server = expressApp;
}

export const handler: Handler = async (event, context) => {
  server = server ?? (await bootstrap());
  return server(event, context);
};
