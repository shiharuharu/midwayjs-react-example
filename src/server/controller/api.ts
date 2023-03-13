import { Inject, Controller, Get } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Get('/test')
  async test() {
    return { success: true, message: 'OK', data: 'test' };
  }
}
