import { Component } from '@angular/core';

@Component({
  selector: 'app-instructor-review',
  templateUrl: './instructor-review.component.html',
  styleUrls: ['./instructor-review.component.css']
})
export class InstructorReviewComponent {

  reviewText: string = ''
  
  maxInputLength = 300
  typedCharsLength = 0
  
  typed(e: any) {
    this.typedCharsLength = e.target.value.length;
  }

}
