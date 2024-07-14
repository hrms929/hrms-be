import {
  Body,
  Controller,
  HttpStatus,
  Post
 
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import {
  getErrResSchema,
  MessageDTO
} from '@/shared/dtos';
import { TestService } from './test.service';
import { Ctx } from '@/shared/decorators';
import { TestDTO } from './test.dto';

@ApiTags('Auth')
@ApiResponse(getErrResSchema(HttpStatus.BAD_REQUEST))
@ApiResponse(getErrResSchema(HttpStatus.TOO_MANY_REQUESTS))
@ApiResponse(getErrResSchema(HttpStatus.REQUEST_TIMEOUT))
@ApiResponse(getErrResSchema(HttpStatus.INTERNAL_SERVER_ERROR))
@Controller('test')
export class TestController {
  constructor (private readonly testService: TestService) {}

  /**
   *
   * @param {SignUpReqTO} signUpReq
   * @param {ReqCtx} ctx
   * @returns {Promise<MessageDTO>}
   */
  @ApiResponse({ status: HttpStatus.OK, type: MessageDTO })
  @Post('/test')
  test (@Body() testDto: TestDTO, @Ctx() ctx: ReqCtx) {
    return this.testService.test(testDto, ctx);
  }
}
