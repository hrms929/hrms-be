import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DbConfig, ThrottleConfig } from '@/config';
import { TestController } from './modules/test/test.controller';
import { LoggerMiddleware, ReqCtxMiddleware } from './shared/middlewares';
import { RepositoryModule } from './modules/repository/repository.module';
import { TestModule } from './modules/test/test.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DbConfig),
    ThrottlerModule.forRoot(ThrottleConfig),
    RepositoryModule,
    TestModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(ReqCtxMiddleware, LoggerMiddleware)
    .forRoutes(TestController);
  }
  
}
