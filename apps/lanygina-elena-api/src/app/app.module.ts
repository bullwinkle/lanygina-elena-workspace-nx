import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config';
// import {TypeOrmModule} from '@nestjs/typeorm';
// import {TypeOrmConfigService} from './typeorm.service';

@Module({
  imports: [

    ConfigModule.forRoot({
      load: [()=>({
        LE_BACKEND_URL: process.env.LE_BACKEND_URL,
        LE_DATABASE_URL: process.env.LE_DATABASE_URL,
        LE_FRONTEND_URL: process.env.LE_FRONTEND_URL,
        LE_REDIS_URL: process.env.LE_REDIS_URL,
        PORT: process.env.PORT,
        HOST: process.env.HOST,
      })],
      isGlobal: true,
      cache: true,
      // validate: envValidation,
    }),
    // TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
