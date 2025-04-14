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

  // Create the server using aws-serverless-express
  server = awsServerlessExpress.createServer(expressApp);
}

export const handler: Handler = async (event, context) => {
  // Initialize server if not already done
  if (!server) {
    await bootstrap();
  }

  // Use aws-serverless-express proxy to handle the Lambda event and context
  return awsServerlessExpress.proxy(server, event, context);
};
