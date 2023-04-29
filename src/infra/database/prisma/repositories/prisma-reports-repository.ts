import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Report } from 'src/application/entities/report';
import { ReportsRepository } from 'src/application/entities/repositories/reports-repository';
import { PrismaReportMapper } from '../mappers/report-mapper';

@Injectable()
export class PrismaReportsRepository implements ReportsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(report: Report): Promise<void> {
    const raw = PrismaReportMapper.toPrisma(report);
    await this.prisma.report.create({
      data: raw,
    });
  }

  async findManyByPlaceId(placeId: string): Promise<Report[]> {
    const rawReports = await this.prisma.report.findMany({
      where: {
        placeId,
      },
    });
    return rawReports.map(PrismaReportMapper.toEntity);
  }
}
