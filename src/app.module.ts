import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ThrottlerModule.forRoot({ ttl: 60, limit: 10 })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
