import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';
import { InstructoreditComponent } from '../instructoredit/instructoredit.component';


const ELEMENT_DATA: any = [
  {position: 1,  instructor: "jane doe", department: "engineering", courses: "mechanis, statics" },
  {position: 2,  instructor: "jane doe", department: "engineering", courses: "mechanis, statics" },
  {position: 3,  instructor: "jane doe", department: "engineering", courses: "mechanis, statics" },
  {position: 4,  instructor: "jane doe", department: "engineering", courses: "mechanis, statics" },
  {position: 5,  instructor: "jane doe", department: "engineering", courses: "mechanis, statics" },
  {position: 6,  instructor: "jane doe", department: "engineering", courses: "mechanis, statics" },
  {position: 7,  instructor: "jane doe", department: "engineering", courses: "mechanis, statics" },
  {position: 8,  instructor: "jane doe", department: "engineering", courses: "mechanis, statics" },
  {position: 9,  instructor: "jane doe", department: "engineering", courses: "mechanis, statics" },
  {position: 10, instructor: "jane doe", department: "engineering", courses: "mechanis, statics" },
];


@Component({
  selector: 'app-instructors-table',
  templateUrl: './instructors-table.component.html',
  styleUrls: ['./instructors-table.component.css']
})
export class InstructorsTableComponent {
  displayedColumns: string[] = ['position', 'instructor', 'department','courses','buttons'];
  dataSource = [...ELEMENT_DATA];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DeletePopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openEditDialog() {
    
    const dialogRef = this.dialog.open(InstructoreditComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
