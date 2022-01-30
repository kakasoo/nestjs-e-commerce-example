import { ConfigModule, ConfigService } from '@nestjs/config';

export const TypeOrmModuleOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const NODE_ENV = configService.get('NODE_ENV');

    return {
      type: configService.get('DB_TYPE'),
      host: configService.get(`${NODE_ENV}_DB_HOST`),
      port: Number(configService.get<number>(`${NODE_ENV}_DB_PORT`)),
      username: configService.get(`${NODE_ENV}_DB_USERNAME`),
      database: configService.get(`${NODE_ENV}_DB_DATABASE`),
      password: configService.get(`${NODE_ENV}_DB_PASSWORD`),
      entities: [__dirname + '../../**/*.entity{.ts,.js}'],
      synchronize: false,

      ...(NODE_ENV === 'DEVELOPMENT'
        ? { retryAttempts: 2, logging: true }
        : { logging: false }),
    };
  },
};
