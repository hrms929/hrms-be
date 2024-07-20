import { Logger } from 'src/shared/logger';

export type ObjectLiteral = Record<string, unknown>;

export interface ErrDetails {
  errorMsg: string;
  stack: string;
}

export interface IJwtPayload {
  userId: string;
  tokenId: string;
}

/* declare global types here */

declare global {
  interface Ctx {
    logger: Logger;
  }

  interface ReqCtx extends Ctx {
    requestId: string;
    routeKey: string;
    userId?: string;
  }
}

declare module 'express' {
  interface Request {
    ctx: ReqCtx;
  }
}

/* declare global types here */
