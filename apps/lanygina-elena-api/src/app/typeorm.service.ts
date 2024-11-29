import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

interface IEnvironment {
  LE_BACKEND_URL: string;
  LE_DATABASE_URL: string;
  LE_FRONTEND_URL: string;
  LE_REDIS_URL: string;
  PORT: string;
  HOST: string;
}

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private config: ConfigService) {}

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    // const db = this.config.get<IEnvironment['LE_DATABASE_URL']>('database') as IEnvironment['LE_DATABASE_URL'];
    // const productionMode = this.config.get<IEnvironment['production']>('production') as IEnvironment['production'];
    const productionMode = true;



    return {
      type: 'postgres',
      host: 'dpg-ct4bfsl6l47c73f8co6g-a.frankfurt-postgres.render.com',
      port: 5432,
      database: 'lanyginaelena_db',
      username: 'lanyginaelena_db_user',
      password: 'VGCcilLsXvWip2z2Vxp4jadxPwbqYGie',
        migrations: ['dist/migrations/*.{ts,js}'],
      logger: 'file',
      synchronize: !productionMode, // never use TRUE in production!
      autoLoadEntities: true,
    };
  }
}
