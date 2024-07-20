import { HttpStatus } from '@nestjs/common';
import { ApiProperty, ApiResponseOptions } from '@nestjs/swagger';

export class UnAuthorizedResDTO {
  @ApiProperty({ example: 'Unauthorized' })
  message: string;

  @ApiProperty({ example: true, required: false })
  regenerateToken?: boolean;

  @ApiProperty({ example: HttpStatus.UNAUTHORIZED })
  statusCode: number;
}

export class BadRequestResDTO {
  @ApiProperty({ example: 'name must be longer than or equal to 2 characters' })
  message: string;
}

export class TooManyRequestsResDTO {
  @ApiProperty({ example: 'Too Many Requests' })
    message: string;
}

export class InternalServerErrorResDTO {
  @ApiProperty({ example: 'Something went wrong!' })
  message: string;
}

export class RequestTimeOutResDTO {
  @ApiProperty({ example: 'Request Timeout' })
  message: string;

  @ApiProperty({ example: HttpStatus.REQUEST_TIMEOUT })
  statusCode: number;
}

/**
 *
 * @param {HttpStatus} status
 * @returns {ObjectLiteral}
 */
export function getErrResSchema (status: HttpStatus): ApiResponseOptions {
  switch (status) {
    case HttpStatus.UNAUTHORIZED:
      return {
        status,
        type: UnAuthorizedResDTO,
        description: 'Unauthorized'
      };
    case HttpStatus.BAD_REQUEST:
      return {
        status,
        type: BadRequestResDTO,
        description: 'Bad Request'
      };
    case HttpStatus.TOO_MANY_REQUESTS:
      return {
        status,
        type: TooManyRequestsResDTO,
        description: 'Too many Requests'
      };
    case HttpStatus.REQUEST_TIMEOUT:
      return {
        status,
        type: InternalServerErrorResDTO,
        description: 'Request Timeout'
      };
    case HttpStatus.INTERNAL_SERVER_ERROR:
      return {
        status,
        type: InternalServerErrorResDTO,
        description: 'Something went wrong!'
      };
  }
}
