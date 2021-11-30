import { Controller, Get, Post, Req, Headers } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers(@Req() req: Request, @Headers() headers: any) {
    return this.appService.getUsers(headers);
  }

  @Post('users/authenticate')
  authenticate(@Req() req: Request) {
    return this.appService.authenticate(req.body);
  }
}
