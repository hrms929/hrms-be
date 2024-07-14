import { Module, } from '@nestjs/common';
import { APP_GUARD, } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule, } from '@nestjs/throttler';
import { TypeOrmModule, } from '@nestjs/typeorm';

import { DbConfig, ThrottleConfig, } from '@/config';
import { TestController, } from './modules/test/test.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(DbConfig,),
    ThrottlerModule.forRoot(ThrottleConfig,),
  ],
  controllers: [TestController,],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
},)
export class AppModule {}
