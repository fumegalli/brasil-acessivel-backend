import { makeReport } from '../../../test/factories/report-factory';
import { InMemoryReportsRepository } from '../../../test/repositories/in-memory-reports-repository';
import { FindPlaceAccessibleFeatures } from './find-place-accessible-features';

describe('Find Place Accessible Features', () => {
  it('should return all accessible features reported by place', async () => {
    const reportsRepo = new InMemoryReportsRepository();
    const report1 = makeReport({ blindness: true });
    const report2 = makeReport({ blindness: true, guideDog: true });
    reportsRepo.create(report1);
    reportsRepo.create(report2);

    const findPlaceAccessibleFeatures = new FindPlaceAccessibleFeatures(
      reportsRepo,
    );
    const { accessibleFeatures } = await findPlaceAccessibleFeatures.execute({
      placeId: 'placeId',
    });

    expect(accessibleFeatures).toHaveLength(2);
    expect(accessibleFeatures[0].name).toBe('blindness');
    expect(accessibleFeatures[0].reportsQuantity).toBe(2);
    expect(accessibleFeatures[1].name).toBe('guideDog');
    expect(accessibleFeatures[1].reportsQuantity).toBe(1);
  });
});
