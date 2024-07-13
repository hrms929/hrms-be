import {
  Controller,
  HttpStatus,
  Post,
 
} from '@nestjs/common';
import { ApiResponse, ApiTags, } from '@nestjs/swagger';

import {
  getErrResSchema,
  MessageDTO,
} from '@/shared/dtos';

@ApiTags('Auth',)
@ApiResponse(getErrResSchema(HttpStatus.BAD_REQUEST,),)
@ApiResponse(getErrResSchema(HttpStatus.TOO_MANY_REQUESTS,),)
@ApiResponse(getErrResSchema(HttpStatus.REQUEST_TIMEOUT,),)
@ApiResponse(getErrResSchema(HttpStatus.INTERNAL_SERVER_ERROR,),)
@Controller('test',)
export class TestController {
  constructor () {}

  /**
   *
   * @param {SignUpReqTO} signUpReq
   * @param {ReqCtx} ctx
   * @returns {Promise<MessageDTO>}
   */
  @ApiResponse({ status: HttpStatus.OK, type: MessageDTO, },)
  @Post('/helloWorld',)
  async helloWorld (): Promise<MessageDTO> {
    return { message: 'hello world', };
  }
}
