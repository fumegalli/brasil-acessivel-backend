import { IsNotEmpty, IsString } from 'class-validator';

export class PlaceId {
  @IsString()
  @IsNotEmpty()
  id: string;
}
