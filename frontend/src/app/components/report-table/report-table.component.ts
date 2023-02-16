import { Component, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';


const ELEMENT_DATA: any = [
  {position: 1, report: 'This is a very hateful comment', instructor: "jane doe", date: "02/06/2023" },
  {position: 2, report: 'This is a very hateful comment', instructor: "jane doe", date: "02/06/2023" },
  {position: 3, report: 'This is a very hateful comment', instructor: "jane doe", date: "02/06/2023" },
  {position: 4, report: 'This is a very hateful comment', instructor: "jane doe", date: "02/06/2023" },
  {position: 5, report: 'This is a very hateful comment', instructor: "jane doe", date: "02/06/2023" },
  {position: 6, report: 'This is a very hateful comment', instructor: "jane doe", date: "02/06/2023" },
  {position: 7, report: 'This is a very hateful comment', instructor: "jane doe", date: "02/06/2023" },
  {position: 8, report: 'This is a very hateful comment', instructor: "jane doe", date: "02/06/2023" },
  {position: 9, report: 'This is a very hateful comment', instructor: "jane doe", date: "02/06/2023" },
  {position: 10,report: 'This is a very hateful comment', instructor: "jane doe", date: "02/06/2023" },
];

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.css']
})
export class ReportTableComponent {
  displayedColumns: string[] = ['position', 'report', 'instructor', 'date','buttons'];
  dataSource = [...ELEMENT_DATA];




}
