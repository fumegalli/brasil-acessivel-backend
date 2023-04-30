import { Injectable } from '@nestjs/common';
import { ReportsRepository } from '../entities/repositories/reports-repository';

type Feature = {
  name: string;
  reportsQuantity: number;
};

interface Input {
  placeId: string;
}

interface Output {
  accessibleFeatures: Feature[];
}

@Injectable()
export class FindPlaceAccessibleFeatures {
  constructor(private readonly reportsRepo: ReportsRepository) {}

  async execute(input: Input): Promise<Output> {
    const { placeId } = input;
    const reports = await this.reportsRepo.findManyByPlaceId(placeId);
    const accessibleFeatures: Feature[] = [];
    reports.forEach((report) => {
      Object.entries(report.props).forEach(([key, value]) => {
        if (typeof value !== 'boolean' || !value) return;
        const index = accessibleFeatures.findIndex(
          (feature) => feature.name === key,
        );
        index < 0
          ? accessibleFeatures.push({ name: key, reportsQuantity: 1 })
          : accessibleFeatures[index].reportsQuantity++;
      });
    });

    return { accessibleFeatures };
  }
}
