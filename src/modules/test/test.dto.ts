import { ApiProperty } from '@nestjs/swagger';
import { MinLength } from 'class-validator';

export class TestDTO {
  @ApiProperty({ name: 'name', minLength: 5 })
  @MinLength(5)
  name: string;
}