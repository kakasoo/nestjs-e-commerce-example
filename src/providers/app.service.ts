import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(userId: number): number {
    return userId;
  }
}
