import { Component } from '@angular/core';


const ELEMENT_DATA: any = [
  {position: 1, review: 3.5, instructor: "jane doe", date: "02/06/2023" },
  {position: 2, review: 3.5, instructor: "jane doe", date: "02/06/2023" },
  {position: 3, review: 3.5, instructor: "jane doe", date: "02/06/2023" },
  {position: 4, review: 3.5, instructor: "jane doe", date: "02/06/2023" },
  {position: 5, review: 3.5, instructor: "jane doe", date: "02/06/2023" },
  {position: 6, review: 3.5, instructor: "jane doe", date: "02/06/2023" },
  {position: 7, review: 3.5, instructor: "jane doe", date: "02/06/2023" },
  {position: 8, review: 3.5, instructor: "jane doe", date: "02/06/2023" },
  {position: 9, review: 3.5, instructor: "jane doe", date: "02/06/2023" },
  {position: 10,review: 3.5, instructor: "jane doe", date: "02/06/2023" },
];

@Component({
  selector: 'app-review-table',
  templateUrl: './review-table.component.html',
  styleUrls: ['./review-table.component.css']
})
export class ReviewTableComponent {
  displayedColumns: string[] = ['position', 'review', 'instructor', 'date','buttons'];
  dataSource = [...ELEMENT_DATA];

}
