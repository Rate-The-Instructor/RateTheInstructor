import { Component, Input } from '@angular/core';
import { InstructorInterface } from 'src/app/Interfaces/instructorGet';

@Component({
  selector: 'app-instructor-card',
  templateUrl: './instructor-card.component.html',
  styleUrls: ['./instructor-card.component.css'],
})
export class InstructorCardComponent {
  constructor() {}
  @Input() instructor!: any;
}
