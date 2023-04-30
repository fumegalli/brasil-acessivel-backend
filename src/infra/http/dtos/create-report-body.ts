import { IsBoolean, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateReportBody {
  @IsNotEmpty()
  @IsUUID()
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
