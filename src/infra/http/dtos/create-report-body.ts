import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateReportBody {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  placeId: string;

  @IsBoolean()
  @ApiPropertyOptional()
  muteness: boolean;

  @IsBoolean()
  @ApiPropertyOptional()
  blindness: boolean;

  @IsBoolean()
  @ApiPropertyOptional()
  guideDog: boolean;

  @IsBoolean()
  @ApiPropertyOptional()
  hearingImpairment: boolean;

  @IsBoolean()
  @ApiPropertyOptional()
  learningImpairment: boolean;

  @IsBoolean()
  @ApiPropertyOptional()
  mobilityImpairment: boolean;

  @IsBoolean()
  @ApiPropertyOptional()
  visualImpairment: boolean;

  @IsBoolean()
  @ApiPropertyOptional()
  wheelchair: boolean;
}
