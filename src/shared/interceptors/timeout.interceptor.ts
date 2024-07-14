import {
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor
} from '@nestjs/common';

import {
  Observable,
  TimeoutError,
  catchError,
  throwError,
  timeout
} from 'rxjs';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept (context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      timeout(10000),
      catchError((err) => {
        if (err instanceof TimeoutError) {
          return throwError(() => new HttpException('Request Timeout', HttpStatus.REQUEST_TIMEOUT));
        }
        return throwError(() => err);
      })
    );
  }
}
