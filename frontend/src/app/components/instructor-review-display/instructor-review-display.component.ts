import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TokenService } from 'src/app/services/token/token.service';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';
import { ReportPopupComponent } from '../report-popup/report-popup.component';

@Component({
  selector: 'app-instructor-review-display',
  templateUrl: './instructor-review-display.component.html',
  styleUrls: ['./instructor-review-display.component.css'],
})
export class InstructorReviewDisplayComponent {
  @Input() rating!: any;

  constructor(public dialog: MatDialog, private tokenService: TokenService) {}

  loggedInUser: any

  ngOnInit(){
    this.loggedInUser = this.tokenService.getUserData();
    console.log(this.loggedInUser);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DeletePopupComponent, {
      data: { reviewId: this.rating._id, type: 'rating' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(ReportPopupComponent, {
      data: { reviewId: this.rating._id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
