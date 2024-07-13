import { Injectable, type NestMiddleware, } from '@nestjs/common';
import { type Request, type Response, } from 'express';

import { Utils, } from '@/shared/utils';
import { Logger, } from '@/shared/logger';

@Injectable()
export class ReqCtxMiddleware implements NestMiddleware {
  use (req: Request, res: Response, next: () => void,) {
    const routeKey = `${req.method} ${req.path}`;
    const requestId = Utils.genUUID();
    const logger = new Logger([routeKey, requestId,].join(' | ',),);
    req.ctx = { requestId, routeKey, logger, };

    next();
  }
}
