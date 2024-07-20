import { Module } from '@nestjs/common';

import { providers } from './providers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from '@/shared/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature(entities)
  ],
  providers: providers,
  exports: providers
})
export class RepositoryModule {}
