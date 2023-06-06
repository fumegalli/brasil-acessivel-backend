import { Body, Controller, Post } from '@nestjs/common';
import { CreateReport } from 'src/application/use-cases/create-report';
import { CreateReportBody } from '../dtos/create-report-body';
import { FindReportsByPlacesBody } from '../dtos/find-reports-by-places-body';
import { ReportMapper } from '../mappers/report-mapper';
import { FindPlacesAccessibleFeatures } from 'src/application/use-cases/find-places-accessible-features';
import {
  ApiBody,
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';

@ApiTags('Reporte')
@Controller('reports')
export class ReportsController {
  constructor(
    private readonly createReport: CreateReport,
    private readonly findPlaceAccessibleFeatures: FindPlacesAccessibleFeatures,
  ) {}

  @Post()
  @ApiBody({ type: CreateReportBody })
  @ApiCreatedResponse()
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

  @Post('/places')
  @ApiBody({ type: FindReportsByPlacesBody })
  @ApiOkResponse()
  async findAllByPlaceId(@Body() body: FindReportsByPlacesBody) {
    const { places } = await this.findPlaceAccessibleFeatures.execute({
      places: body.places,
    });
    return { places };
  }
}
