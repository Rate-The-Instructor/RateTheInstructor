import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReportDto } from 'src/reports/dots/create-report.dto';
import { UpdateReportDto } from 'src/reports/dots/update.report.dto';
import { IReport } from 'src/reports/interfaces/report.interface';
@Injectable()
export class ReportsService {
  constructor(@InjectModel('report') private ReportModel: Model<IReport>) {}

  async createReport(dto: CreateReportDto): Promise<IReport> {
    try {
      const report = await this.ReportModel.create(dto);
      return report;
    } catch (err) {
      throw err;
    }
  }

  async updateReport(id: string, dto: UpdateReportDto): Promise<IReport> {
    try {
      const updatedReport = await this.ReportModel.findByIdAndUpdate(id, dto, {
        new: true,
      })
        .sort({ updatedAt: -1 })
        .exec();

      return updatedReport;
    } catch (err) {
      throw err;
    }
  }
  async deleteReport(id: string): Promise<IReport> {
    try {
      const deltedReport = await this.ReportModel.findByIdAndDelete(id).exec();
      return deltedReport;
    } catch (err) {
      throw err;
    }
  }
  async getAllReports(): Promise<IReport[]> {
    try {
      const reports = await this.ReportModel.find()
        .populate('reviewId')
        .sort({ updatedAt: -1 })
        .exec();
      return reports;
    } catch (err) {
      return err;
    }
  }

  async getReportById(id: string): Promise<IReport> {
    try {
      const report = await this.ReportModel.findById(id)
        .populate('reviewId')
        .exec();
      return report;
    } catch (err) {
      throw err;
    }
  }

  async getReportByReview(reviewId: string): Promise<IReport[]> {
    try {
      const reports = await this.ReportModel.find({ reviewId })
        .sort({ updatedAt: -1 })
        .exec();
      return reports;
    } catch (err) {
      throw err;
    }
  }
  async getReportByReporter(reporterId: string): Promise<IReport[]> {
    try {
      const reports = await this.ReportModel.find({ reporterId })
        .sort({ updatedAt: -1 })
        .exec();
      return reports;
    } catch (err) {
      throw err;
    }
  }
}
