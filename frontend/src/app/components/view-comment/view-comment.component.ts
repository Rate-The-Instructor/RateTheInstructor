import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Commentervice } from 'src/app/services/comment/comment.service';
import { TokenService } from 'src/app/services/token/token.service';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';
import { EditPopupComponent } from '../edit-popup/edit-popup.component';
import { ReportPopupComponent } from '../report-popup/report-popup.component';

@Component({
  selector: 'app-view-comment',
  templateUrl: './view-comment.component.html',
  styleUrls: ['./view-comment.component.css'],
})
export class ViewCommentComponent {
  constructor(public dialog: MatDialog, private tokenService: TokenService) {}

  @Input() comment: any;
  loggedInUser: any;

  ngOnInit() {
    this.loggedInUser = this.tokenService.getUserData();
  }

  openDeleteDialog() {
    const data: any = {
      reviewId: this.comment._id,
      type: 'comment',
    };
    const dialogRef = this.dialog.open(DeletePopupComponent, { data: data });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openReportDialog() {
    const data: any = {
      reviewId: this.comment._id,
    };

    const dialogRef = this.dialog.open(ReportPopupComponent, {
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditDialog() {
    const data: any = {
      comment: this.comment,
    };

    const dialogRef = this.dialog.open(EditPopupComponent, {
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
