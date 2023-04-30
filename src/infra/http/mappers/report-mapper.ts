import { Report } from 'src/application/entities/report';

export class ReportMapper {
  static toResponse(report: Report) {
    return {
      id: report.id,
      placeId: report.placeId,
      muteness: report.muteness,
      blindness: report.blindness,
      guideDog: report.guideDog,
      hearingImpairment: report.hearingImpairment,
      learningImpairment: report.learningImpairment,
      mobilityImpairment: report.mobilityImpairment,
      visualImpairment: report.visualImpairment,
      wheelchair: report.wheelchair,
    };
  }
}
