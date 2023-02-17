import { Component } from '@angular/core';

@Component({
  selector: 'app-instructors-list-page',
  templateUrl: './instructors-list-page.component.html',
  styleUrls: ['./instructors-list-page.component.css']
})
export class InstructorsListPageComponent {

  departments = [
    'Software Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Chemical Engineering',
  ]

  filterDepartment = ''
  filterCourse = ''
}
