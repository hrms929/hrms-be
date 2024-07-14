import { Module } from '@nestjs/common';

import { TestService } from './test.service';
import { TestController } from './test.controller';
import { RepositoryModule } from '../repository/repository.module';

@Module({
  imports: [RepositoryModule],
  controllers: [TestController],
  providers: [TestService]
})
export class TestModule {}
