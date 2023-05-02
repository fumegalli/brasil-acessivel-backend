import { Report } from '../report';

export abstract class ReportsRepository {
  abstract create(report: Report): Promise<void>;
  abstract findManyByPlaces(ids: string[]): Promise<Report[]>;
}
