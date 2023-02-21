import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RatingService } from 'src/app/services/rating/rating.service';
import { ReportService } from 'src/app/services/report/report.service';

@Component({
  selector: 'app-review-display-popup',
  templateUrl: './review-display-popup.component.html',
  styleUrls: ['./review-display-popup.component.css'],
})
export class ReviewDisplayPopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ratingService: RatingService,
    private reportService: ReportService
  ) {}

  review: any;

  ngOnInit() {
    this.ratingService.getRatingsById(this.data.reviewId).subscribe((res) => {
      console.log(res, 23434);
      this.review = res;
    });
  }

  deleteRating() {
    console.log(this.review);
    this.ratingService.deleteRating(this.review._id).subscribe(
      (res) => {
        alert('Successfully deleted!');
        console.log(this.data.reportId, 111111111);
        this.reportService
          .deleteReport(this.data.reportId)
          .subscribe((res) => window.location.reload());
      },
      (error) => alert('An error Occured')
    );
  }
}
