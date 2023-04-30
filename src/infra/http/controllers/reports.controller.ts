import { Body, Controller, Post } from '@nestjs/common';
import { CreateReport } from 'src/application/use-cases/create-report';
import { CreateReportBody } from '../dtos/create-report-body';
import { ReportMapper } from '../mappers/report-mapper';

@Controller('reports')
export class ReportsController {
  constructor(private readonly createReport: CreateReport) {}

  @Post()
  async create(@Body() body: CreateReportBody) {
    const { report } = await this.createReport.execute({
      placeId: body.placeId,
      muteness: body.muteness,
      blindness: body.blindness,
      guideDog: body.guideDog,
      hearingImpairment: body.hearingImpairment,
      learningImpairment: body.learningImpairment,
      mobilityImpairment: body.mobilityImpairment,
      visualImpairment: body.visualImpairment,
      wheelchair: body.wheelchair,
    });
    return {
      report: ReportMapper.toResponse(report),
    };
  }
}
