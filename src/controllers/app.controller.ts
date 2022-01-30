import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from '../providers/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Body() body): number {
    return this.appService.getHello(body);
  }
}
