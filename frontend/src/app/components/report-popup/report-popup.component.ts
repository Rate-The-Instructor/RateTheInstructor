import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReportService } from 'src/app/services/report/report.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-report-popup',
  templateUrl: './report-popup.component.html',
  styleUrls: ['./report-popup.component.css'],
})
export class ReportPopupComponent {
  constructor(
    private reportService: ReportService,
    private tokenService: TokenService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  reportText: string = '';

  submitReport() {
    if (!this.reportText) {
      alert('You must enter a report text');
      return;
    }

    const reportData = {
      userId: this.tokenService.getUserData().id,
      reviewId: this.data.reviewId,
      message: this.reportText,
    };

    console.log(reportData);

    this.reportService.postReport(reportData).subscribe(res => {
      alert('Report submitted successfully!')
    });
  }
}
