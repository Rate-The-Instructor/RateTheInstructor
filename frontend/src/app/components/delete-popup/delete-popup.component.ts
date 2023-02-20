import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RatingService } from 'src/app/services/rating/rating.service';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css']
})
export class DeletePopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ratingService: RatingService){}

  deleteData() {
    if (this.data.type === 'rating'){
      this.ratingService.deleteRating(this.data.reviewId).subscribe(res => alert("Deleted succesfully!"));
    }

    else if (this.data.type === 'comment') {
      
    }

    else if (this.data.type === 'instructor'){

    }

  }

}

