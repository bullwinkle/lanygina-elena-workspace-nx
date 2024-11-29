/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const PORT = Number(process.env.PORT) || 3000;
  const HOST = process.env.HOST || 'localhost';
  const FRONTEND_URL = process.env?.['LE_FRONTEND_URL'] || 'http://localhost:4200';
  const DATABASE_URL = process.env?.['LE_DATABASE_URL'] || 'postgresql://lanyginaelena_db_user:VGCcilLsXvWip2z2Vxp4jadxPwbqYGie@dpg-ct4bfsl6l47c73f8co6g-a.frankfurt-postgres.render.com/lanyginaelena_db';

  console.log(`PORT:`, PORT);
  console.log(`HOST:`, HOST);
  console.log(`FRONTEND_URL:`, FRONTEND_URL);
  console.log(`DATABASE_URL:`, DATABASE_URL);

  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(PORT);
  Logger.log(`🚀 Application is running on: http://localhost:${PORT}/${globalPrefix}`);
}

bootstrap();
