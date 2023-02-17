import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';


const ELEMENT_DATA: any = [
  {position: 1,  student: "jane doe", department: "engineering", email: "example@gmail.com" },
  {position: 2,  student: "jane doe", department: "engineering", email: "example@gmail.com" },
  {position: 3,  student: "jane doe", department: "engineering", email: "example@gmail.com" },
  {position: 4,  student: "jane doe", department: "engineering", email: "example@gmail.com" },
  {position: 5,  student: "jane doe", department: "engineering", email: "example@gmail.com" },
  {position: 6,  student: "jane doe", department: "engineering", email: "example@gmail.com" },
  {position: 7,  student: "jane doe", department: "engineering", email: "example@gmail.com" },
  {position: 8,  student: "jane doe", department: "engineering", email: "example@gmail.com" },
  {position: 9,  student: "jane doe", department: "engineering", email: "example@gmail.com" },
  {position: 10, student: "jane doe", department: "engineering", email: "example@gmail.com" },
];


@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent {
  displayedColumns: string[] = ['position', 'student', 'department','email','buttons'];
  dataSource = [...ELEMENT_DATA];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DeletePopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
