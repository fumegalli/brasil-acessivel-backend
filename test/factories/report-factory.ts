import { Report, ReportProps } from 'src/application/entities/report';

export function makeReport(override: Partial<ReportProps> = {}) {
  return new Report({
    muteness: false,
    blindness: false,
    guideDog: false,
    hearingImpairment: false,
    learningImpairment: false,
    mobilityImpairment: false,
    visualImpairment: false,
    wheelchair: false,
    placeId: 'placeId',
    ...override,
  });
}
