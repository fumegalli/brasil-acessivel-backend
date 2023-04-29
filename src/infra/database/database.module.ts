import { Module } from '@nestjs/common';
import { PrismaReportsRepository } from './prisma/repositories/prisma-reports-repository';
import { PrismaService } from './prisma/prisma.service';
import { ReportsRepository } from 'src/application/entities/repositories/reports-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: ReportsRepository,
      useClass: PrismaReportsRepository,
    },
  ],
  exports: [ReportsRepository],
})
export class DatabaseModule {}
