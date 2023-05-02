import { Report } from 'src/application/entities/report';
import { ReportsRepository } from 'src/application/entities/repositories/reports-repository';

export class InMemoryReportsRepository implements ReportsRepository {
  public reports: Report[] = [];

  async create(report: Report): Promise<void> {
    this.reports.push(report);
  }

  async findManyByPlaces(ids: string[]): Promise<Report[]> {
    return this.reports.filter((report) => ids.includes(report.placeId));
  }
}
