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
  allInstructors!: any;
  ngOnInit() {
    this.instructorService.getInstructors().subscribe((instructors) => {
      this.allInstructors = instructors;
      console.log(instructors[0]);
    });
  }

  departments: any = ['SITE', 'SMIE', 'SECE', 'SCEE', 'SCBE', 'CBME'];

  departmentNames: any = {
    SITE: '63f480a5fea0517ef6834071',
    SMIE: '63f480b8fea0517ef6834073',
    SECE: '63f480c1fea0517ef6834075',
    SCEE: '63f480d2fea0517ef6834077',
    SCBE: '63f480dbfea0517ef6834079',
    CBME: '63f480e8fea0517ef683407b',
  };

  filterDepartment = '';
  filterCourse = '';

  filtered: any;

  handlefilterChange() {
    this.filtered = this.allInstructors.filter(
      (ins: any) => ins.department.departmentName === this.filterDepartment
    );
    console.log(this.filtered);
  }
}
