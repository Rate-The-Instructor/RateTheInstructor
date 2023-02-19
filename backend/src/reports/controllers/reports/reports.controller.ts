import {
  Controller,
  Post,
  Delete,
  Patch,
  Get,
  Param,
  Body,
} from '@nestjs/common';
import { CreateReportDto } from 'src/reports/dots/create-report.dto';
import { UpdateReportDto } from 'src/reports/dots/update.report.dto';
import { ReportsService } from 'src/reports/services/reports/reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private reportService: ReportsService) {}

  @Get()
  async getAll() {
    return this.reportService.getAllReports();
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return this.reportService.getReportById(id);
  }

  @Get('/rating/:id')
  async getByReviewId(@Param('id') id: string) {
    return this.reportService.getReportByReview(id);
  }

  @Get('/user/:id')
  async getReviewByReporter(@Param('id') id: string) {
    return this.reportService.getReportByReporter(id);
  }

  @Post()
  async createReport(@Body() dto: CreateReportDto) {
    return this.reportService.createReport(dto);
  }

  @Patch('/:id')
  async updateReport(@Param('id') id: string, @Body() dto: UpdateReportDto) {
    return this.reportService.updateReport(id, dto);
  }

  @Delete('/:id')
  async deleteReport(@Param('id') id: string) {
    return this.reportService.deleteReport(id);
  }
}
