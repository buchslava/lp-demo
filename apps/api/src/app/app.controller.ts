import { Controller, Get, Post, Req } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers(@Req() req: Request) {
    return this.appService.getUsers(req.headers);
  }

  @Post('users/authenticate')
  authenticate(@Req() req: Request) {
    return this.appService.authenticate(req.body);
  }
}
