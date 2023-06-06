import { ArrayNotEmpty, ValidateNested } from 'class-validator';
import { PlaceId } from './place-id';
import { ApiProperty } from '@nestjs/swagger';

export class FindReportsByPlacesBody {
  @ArrayNotEmpty()
  @ValidateNested()
  @ApiProperty({ type: [PlaceId] })
  places: PlaceId[];
}
