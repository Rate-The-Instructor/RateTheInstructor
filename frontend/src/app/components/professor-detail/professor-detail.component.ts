import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-professor-detail',
  templateUrl: './professor-detail.component.html',
  styleUrls: ['./professor-detail.component.css']
})
export class ProfessorDetailComponent {
  @Input() instructor:any

  constructor(private tokenService:TokenService, private router: Router){}

  rateInstructor(instructorId:string){
    const userData = this.tokenService.getUserData();

    if(!userData){
      this.router.navigate(['/login'])
      return
    }

    this.router.navigate(['/rate', instructorId])

  }

  
}
