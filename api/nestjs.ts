import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';  // Path relatif ke src
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { Handler } from 'aws-lambda';
import * as awsServerlessExpress from 'aws-serverless-express';

let server;

async function bootstrap() {
  const expressApp = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  app.enableCors();
  app.setGlobalPrefix('api/v1');

  await app.init();

  // Menggunakan aws-serverless-express untuk mengubah Express app menjadi Lambda handler
  server = awsServerlessExpress.createServer(expressApp);
}

export const handler: Handler = async (event, context) => {
  if (!server) {
    await bootstrap();
  }

  // Menangani event dan context menggunakan aws-serverless-express
  return awsServerlessExpress.proxy(server, event, context);
};
