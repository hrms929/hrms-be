import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { TestDTO } from './test.dto';

@Injectable()
export class TestService {
  constructor(private readonly userRepository: UserRepository) {}
  async test(testDto: TestDTO, ctx: ReqCtx) {
    ctx.logger.updateContext(`userId | ${'1234'}`);

    const data = await this.userRepository.getUserData({ name: testDto.name });
    ctx.logger.log(`userData | ${JSON.stringify(data)}`, 'TestService.test');

    return { data };
  }
}
