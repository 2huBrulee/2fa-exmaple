import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('/verify')
  verifyCode(@Body('code') code: string) {
    return this.appService.verifyAuthCode(code);
  }

}
