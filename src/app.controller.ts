import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('front-mp')
  index() {}

  @Post('process_payment')
  async generatePayment(@Body() data: any) {
    return await this.appService.generatePayment(data);
  }
}
