import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';
import { ReportService } from 'src/app/services/report/report.service';
import { ReviewDisplayPopupComponent } from '../review-display-popup/review-display-popup.component';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css'],
})
export class ReportTableComponent {
  constructor(public dialog: MatDialog, private reportService: ReportService) {}

  reports: any;
  dataSource: any;

  ELEMENT_DATA: any = [
    {
      message: 'This is a very hateful comment',
      reviewId: '1123123',
    },
  ];

  reportIds: any;

  ngOnInit() {
    this.reportService.getAllReports().subscribe((res) => {
      console.log(res);
      this.ELEMENT_DATA = res;
      this.dataSource = [...this.ELEMENT_DATA];
    });
  }

  displayedColumns: string[] = ['position', 'message', 'buttons'];

  openRating(reviewId: string, reportId: string) {
    console.log(reviewId);
    const dialogRef = this.dialog.open(ReviewDisplayPopupComponent, {
      data: { reviewId, reportId },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DeletePopupComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
