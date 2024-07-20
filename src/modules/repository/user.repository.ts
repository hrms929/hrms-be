import { UserEntity } from '@/shared/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, FindOptionsWhere, Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {}

  getUserData(condition: FindOptionsWhere<UserEntity>) {
    return this.userRepository.find({
      where: condition
    });
  }
}

export type TUserRepository = DeepPartial<UserRepository>;