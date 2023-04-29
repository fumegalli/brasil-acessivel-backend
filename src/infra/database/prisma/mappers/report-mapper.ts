import { Report as RawReport } from '@prisma/client';
import { Report } from 'src/application/entities/report';

export class PrismaReportMapper {
  static toPrisma(report: Report) {
    return {
      id: report.id,
      placeId: report.placeId,
      muteness: report.muteness,
    };
  }

  static toEntity(raw: RawReport): Report {
    return new Report({
      id: raw.id,
      muteness: raw.muteness,
      placeId: raw.placeId,
    });
  }
}
