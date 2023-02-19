import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';
import { ReportPopupComponent } from '../report-popup/report-popup.component';



@Component({
  selector: 'app-instructor-review-display',
  templateUrl: './instructor-review-display.component.html',
  styleUrls: ['./instructor-review-display.component.css']
})
export class InstructorReviewDisplayComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DeletePopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditDialog() {
    
    const dialogRef = this.dialog.open(ReportPopupComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
