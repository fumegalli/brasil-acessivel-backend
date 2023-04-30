import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ReportsController } from './controllers/reports.controller';
import { CreateReport } from 'src/application/use-cases/create-report';

@Module({
  imports: [DatabaseModule],
  controllers: [ReportsController],
  providers: [CreateReport],
})
export class HttpModule {}
