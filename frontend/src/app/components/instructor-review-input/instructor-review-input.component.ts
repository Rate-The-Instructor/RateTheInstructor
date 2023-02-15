import { Component } from '@angular/core';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-instructor-review-input',
  templateUrl: './instructor-review-input.component.html',
  styleUrls: ['./instructor-review-input.component.css'],
})
export class InstructorReviewInputComponent {
  ratingData = {
    instructor: '',
    course: 'Civil Engineering',
    gradeRevieved: '',
    useTextBook: '',
    attendanceMandatory: '',
    rating: 0,
    teachAgain: '',
    selectedTags: []
  };

  tags = [
    'Respected',
    'Project Heavy',
    'Lots of Homework',
    'Project Heavy',
    'Hilarious',
    'Clear Explanations',
    'Hilarious',
    'Lots of Homework',
    'Project Heavy',
    'Clear Explanations',
    'Project Heavy',
    'Clear Explanations',
    'Respected',
    'Lots of Homework',
    'Hilarious',
    'Lots of Homework',
    'Clear Explanations',
    'Hilarious',
  ]

  toggleSelection(chip: MatChip) {
    chip.highlighted = !chip.highlighted;
  }


}
