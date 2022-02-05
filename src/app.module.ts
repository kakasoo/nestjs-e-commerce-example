import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { HttpExceptionFilter } from './common/filters/http-exception.fiter';
import { TimeoutInterceptor } from './common/interceptors/timout.interceptor';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from './config/typeorm';
import { UsersModule } from './modules/users.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './modules/categories.module';
import { SellersModule } from './modules/sellers.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(TypeOrmModuleOptions),
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot({ ttl: 60, limit: 10 }),
    AuthModule,
    UsersModule,
    CategoriesModule,
    SellersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeoutInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
