import { Report } from '../report';

export abstract class ReportsRepository {
  abstract create(report: Report): Promise<void>;
  abstract findManyByPlaceId(placeId: string): Promise<Report[]>;
}
