import { Component } from '@angular/core';
import { MatDialog,MatDialogConfig } from "@angular/material/dialog";
import { InstructorReviewInputComponent } from '../instructor-review-input/instructor-review-input.component';
@Component({
  selector: 'app-edit-review-popup',
  templateUrl: './edit-review-popup.component.html',
  styleUrls: ['./edit-review-popup.component.css']
})
export class EditReviewPopupComponent {
  constructor(public dialog:MatDialog){}
  openPopup() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '80%';
    dialogConfig.maxHeight='90vh';
    this.dialog.open(InstructorReviewInputComponent, dialogConfig);
  }
}
