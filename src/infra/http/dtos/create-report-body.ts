import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateReportBody {
  @IsNotEmpty()
  @IsString()
  placeId: string;

  @IsBoolean()
  muteness: boolean;

  @IsBoolean()
  blindness: boolean;

  @IsBoolean()
  guideDog: boolean;

  @IsBoolean()
  hearingImpairment: boolean;

  @IsBoolean()
  learningImpairment: boolean;

  @IsBoolean()
  mobilityImpairment: boolean;

  @IsBoolean()
  visualImpairment: boolean;

  @IsBoolean()
  wheelchair: boolean;
}
