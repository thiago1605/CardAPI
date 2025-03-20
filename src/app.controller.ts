import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMainPage(@Query('name') name: string): string {
    console.log('name', name);
    return this.appService.getCard(name);
  }
}
