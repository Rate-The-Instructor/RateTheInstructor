import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css'],
})
export class RatingBarComponent {
  @Input() ratingDistribution: any;

  one = 0;
  two = 0;
  three = 0;
  four = 0;
  five = 0;

  calculatedRatings: any;

  ngOnInit() {
    const totalRatings =
      this.ratingDistribution[1] +
      this.ratingDistribution[2] +
      this.ratingDistribution[3] +
      this.ratingDistribution[4] +
      this.ratingDistribution[5];

    if (!totalRatings) {
      return;
    }

    this.one = (this.ratingDistribution[1] / totalRatings) * 100;
    this.two = (this.ratingDistribution[2] / totalRatings) * 100;
    this.three = (this.ratingDistribution[3] / totalRatings) * 100;
    this.four = (this.ratingDistribution[4] / totalRatings) * 100;
    this.five = (this.ratingDistribution[5] / totalRatings) * 100;
  }
}
