import { Injectable } from '@nestjs/common';
import { ReportsRepository } from '../entities/repositories/reports-repository';
import { ReportProps } from '../entities/report';

type ReportFeatures = Omit<ReportProps, 'placeId'>;

type FeatureCount = {
  name: string;
  reportsQuantity: number;
};

interface Input {
  places: {
    id: string;
  }[];
}

interface Output {
  places: {
    id: string;
    accessibleFeatures: FeatureCount[];
  }[];
}

@Injectable()
export class FindPlacesAccessibleFeatures {
  constructor(private readonly reportsRepo: ReportsRepository) {}

  async execute(input: Input): Promise<Output> {
    const { places } = input;
    const reports = await this.reportsRepo.findManyByPlaces(
      places.map(({ id }) => id),
    );
    const accessibleFeaturesByPlace: Record<string, FeatureCount[]> = {};
    reports.forEach(({ props }) => {
      const { placeId, ...features } = props;
      if (!accessibleFeaturesByPlace[placeId]) {
        accessibleFeaturesByPlace[placeId] = [];
      }
      FindPlacesAccessibleFeatures.setPlaceAccessibleFeatures(
        features,
        accessibleFeaturesByPlace[placeId],
      );
    });
    const result = places.map((place) => ({
      id: place.id,
      accessibleFeatures: accessibleFeaturesByPlace[place.id] || [],
    }));
    return { places: result };
  }

  private static setPlaceAccessibleFeatures(
    features: ReportFeatures,
    accessibleFeaturesByPlace: FeatureCount[],
  ): void {
    Object.entries(features).forEach(([key, value]) => {
      if (!value) return;
      const index = accessibleFeaturesByPlace.findIndex(
        (feature) => feature.name === key,
      );
      const isFeatureAlreadyReported = index >= 0;
      isFeatureAlreadyReported
        ? accessibleFeaturesByPlace[index].reportsQuantity++
        : accessibleFeaturesByPlace.push({ name: key, reportsQuantity: 1 });
    });
  }
}
