import { Controller, Req, Res, Post, Get } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  handleGet(@Res() response: Response) {
    const requests = this.appService.getAllRequests();
    
    response.json(requests);
  }

  @Post('*')
  handlePost(@Req() request: Request, @Res() response: Response) {
    const urlParams = request.params;
    const queryParams = request.query;
    const body = request.body;
    const method = request.method;
    const path = request.path;

    const echo = this.appService.echoRequest({
      method,
      path,
      urlParams,
      queryParams,
      body,
    });

    response.json(echo);
  }
}