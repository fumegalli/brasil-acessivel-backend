import { Report as RawReport } from '@prisma/client';
import { Report } from 'src/application/entities/report';

export class PrismaReportMapper {
  static toPrisma(report: Report) {
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

  static toEntity(raw: RawReport): Report {
    return new Report(
      {
        placeId: raw.placeId,
        muteness: raw.muteness,
        blindness: raw.blindness,
        guideDog: raw.guideDog,
        hearingImpairment: raw.hearingImpairment,
        learningImpairment: raw.learningImpairment,
        mobilityImpairment: raw.mobilityImpairment,
        visualImpairment: raw.visualImpairment,
        wheelchair: raw.wheelchair,
      },
      raw.id,
    );
  }
}
