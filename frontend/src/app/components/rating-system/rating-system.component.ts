import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormControl } from '@angular/forms';

@Component({
  selector: 'app-rating-system',
  templateUrl: './rating-system.component.html',
  styleUrls: ['./rating-system.component.css']
})
export class RatingSystemComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
  }

  rating=0;

  ratingcontrol=new FormControl(0);
  getRating(){
    // console.log(this.ratingcontrol.value);
    this.rating=this.ratingcontrol?.value || 0;
    console.log(this.rating);
    
  };
}
