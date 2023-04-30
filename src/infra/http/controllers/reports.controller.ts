import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { CreateReport } from 'src/application/use-cases/create-report';
import { CreateReportBody } from '../dtos/create-report-body';
import { ReportMapper } from '../mappers/report-mapper';
import { FindPlaceAccessibleFeatures } from 'src/application/use-cases/find-place-accessible-features';

@Controller('reports')
export class ReportsController {
  constructor(
    private readonly createReport: CreateReport,
    private readonly findPlaceAccessibleFeatures: FindPlaceAccessibleFeatures,
  ) {}

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

  @Get('/place/:placeId')
  async findAllByPlaceId(@Param('placeId') placeId: string) {
    const { accessibleFeatures } =
      await this.findPlaceAccessibleFeatures.execute({
        placeId,
      });
    return { accessibleFeatures };
  }
}
