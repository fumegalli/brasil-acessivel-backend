import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PlaceId {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  id: string;
}
