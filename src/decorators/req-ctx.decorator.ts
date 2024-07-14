import { createParamDecorator, type ExecutionContext, } from '@nestjs/common';
import { type Request, } from 'express';

export const Ctx = createParamDecorator(
  (data: unknown, ctx: ExecutionContext,) => {
    const request: Request = ctx.switchToHttp().getRequest();
    return request.ctx;
  },
);
