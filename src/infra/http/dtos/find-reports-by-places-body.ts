import { ArrayNotEmpty, ValidateNested } from 'class-validator';
import { PlaceId } from './place-id';

export class FindReportsByPlacesBody {
  @ArrayNotEmpty()
  @ValidateNested()
  places: PlaceId[];
}
