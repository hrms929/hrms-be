import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

import { reqFieldsMap } from '@/shared/constants';
import { Utils } from '@/shared/utils';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const statrtTime = Date.now();
    const reqData = {
      userAgent: req.get('User-Agent'),
      clientIp: req.header('x-forwarded-for') || req.socket.remoteAddress,
      query: req.query,
      params: req.params,
      body: req.body
    };

    req.ctx.logger.log(`request | ${Utils.maskObj(reqData, reqFieldsMap)}`,  'LoggerMiddleware');

    const resJson = res.json;
    res.json = function(body) {
      const resLog = {
        statusCode: res.statusCode,
        body,
        timeTakenMs: Date.now() - statrtTime
      };
  
      req.ctx.logger.log(`response | ${JSON.stringify(resLog)}`, 'LoggerMiddleware');

      return resJson.call(this, body);
    };
    next();
  }
}
