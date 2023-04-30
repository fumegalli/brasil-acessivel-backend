import { Injectable } from '@nestjs/common';
import { ReportsRepository } from '../entities/repositories/reports-repository';
import { Report } from '../entities/report';

interface Input {
  placeId: string;
  muteness: boolean;
  blindness: boolean;
  guideDog: boolean;
  hearingImpairment: boolean;
  learningImpairment: boolean;
  mobilityImpairment: boolean;
  visualImpairment: boolean;
  wheelchair: boolean;
}

interface Output {
  report: Report;
}

@Injectable()
export class CreateReport {
  constructor(private readonly reportsRepo: ReportsRepository) {}

  async execute(input: Input): Promise<Output> {
    const report = new Report({
      placeId: input.placeId,
      muteness: input.muteness,
      blindness: input.blindness,
      guideDog: input.guideDog,
      hearingImpairment: input.hearingImpairment,
      learningImpairment: input.learningImpairment,
      mobilityImpairment: input.mobilityImpairment,
      visualImpairment: input.visualImpairment,
      wheelchair: input.wheelchair,
    });
    await this.reportsRepo.create(report);
    return { report };
  }
}
