import { Module } from '@nestjs/common';
import { ReportsController } from './controllers/reports/reports.controller';
import { ReportsService } from './services/reports/reports.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportSchema } from './schemas/report.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'report', schema: ReportSchema }]),
  ],
  controllers: [ReportsController],
  providers: [ReportsService],
  exports: [ReportsService],
})
export class ReportsModule {}
