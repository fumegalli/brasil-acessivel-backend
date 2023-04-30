import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ReportsController } from './controllers/reports.controller';
import { CreateReport } from 'src/application/use-cases/create-report';
import { FindPlaceAccessibleFeatures } from 'src/application/use-cases/find-place-accessible-features';

@Module({
  imports: [DatabaseModule],
  controllers: [ReportsController],
  providers: [CreateReport, FindPlaceAccessibleFeatures],
})
export class HttpModule {}
