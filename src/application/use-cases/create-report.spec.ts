import { makeReport } from 'test/factories/report-factory';
import { InMemoryReportsRepository } from '../../../test/repositories/in-memory-reports-repository';
import { CreateReport } from './create-report';

describe('Create Report', () => {
  it('should create a new report', async () => {
    const reportsRepo = new InMemoryReportsRepository();
    const createReport = new CreateReport(reportsRepo);
    const { report } = await createReport.execute(makeReport());

    expect(reportsRepo.reports).toHaveLength(1);
    expect(reportsRepo.reports[0]).toEqual(report);
  });
});
