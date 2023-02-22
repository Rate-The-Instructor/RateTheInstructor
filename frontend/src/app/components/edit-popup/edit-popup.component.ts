import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Commentervice } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css'],
})
export class EditPopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commentService: Commentervice
  ) {}

  newComment: any = {
    comment: this.data.comment.comment,
  };

  submitEdit() {
    this.commentService
      .updateComment(this.data.comment._id, {
        comment: this.newComment.comment,
      })
      .subscribe(
        (res) => {
          alert('Edited succesfully!');
          window.location.reload();
        },
        (error) => alert('Error, try again!')
      );
  }
}
