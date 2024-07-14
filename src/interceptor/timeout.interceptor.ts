import {
  type CallHandler,
  type ExecutionContext,
  Injectable,
  type NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import {
  type Observable,
  TimeoutError,
  catchError,
  throwError,
  timeout,
} from 'rxjs';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept (context: ExecutionContext, next: CallHandler,): Observable<unknown> {
    return next.handle().pipe(
      timeout(10000,),
      catchError((err,) => {
        if (err instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException(),);
        }
        return throwError(() => err,);
      },),
    );
  }
}
