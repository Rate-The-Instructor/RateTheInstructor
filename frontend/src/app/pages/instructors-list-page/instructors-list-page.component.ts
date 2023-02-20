import { Component } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor/instructor.service';
import { OnInit } from '@angular/core';
import { InstructorInterface } from 'src/app/Interfaces/instructorGet';

@Component({
  selector: 'app-instructors-list-page',
  templateUrl: './instructors-list-page.component.html',
  styleUrls: ['./instructors-list-page.component.css'],
})
export class InstructorsListPageComponent implements OnInit {
  constructor(private instructorService: InstructorService) {}
  allInstructors!: InstructorInterface[];
  ngOnInit() {
    this.instructorService
      .getInstructors()
      .subscribe((instructors) => {
        this.allInstructors = instructors
        console.log(instructors[0].ratingDistribution)
      });
  }

  departments = [
    'Software Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Chemical Engineering',
  ];

  filterDepartment = '';
  filterCourse = '';
}
