import { makeReport } from '../../../test/factories/report-factory';
import { InMemoryReportsRepository } from '../../../test/repositories/in-memory-reports-repository';
import { FindPlacesAccessibleFeatures } from './find-places-accessible-features';

describe('Find Places Accessible Features', () => {
  it('should return all accessible features reported by a list of places', async () => {
    const reportsRepo = new InMemoryReportsRepository();
    const report1 = makeReport({ blindness: true, placeId: 'placeId1' });
    const report2 = makeReport({ guideDog: true, placeId: 'placeId2' });
    reportsRepo.create(report1);
    reportsRepo.create(report2);

    const findPlacesAccessibleFeatures = new FindPlacesAccessibleFeatures(
      reportsRepo,
    );
    const { places } = await findPlacesAccessibleFeatures.execute({
      places: [{ id: 'placeId1' }, { id: 'placeId2' }],
    });

    expect(places).toHaveLength(2);
    expect(places[0].id).toBe('placeId1');
    expect(places[0].accessibleFeatures[0].name).toBe('blindness');
    expect(places[0].accessibleFeatures[0].reportsQuantity).toBe(1);
    expect(places[1].id).toBe('placeId2');
    expect(places[1].accessibleFeatures[0].name).toBe('guideDog');
    expect(places[1].accessibleFeatures[0].reportsQuantity).toBe(1);
  });
});
