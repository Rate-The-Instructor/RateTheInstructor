import { Component } from '@angular/core';
import { TokenService } from 'src/app/services/token/token.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RatingService } from 'src/app/services/rating/rating.service';
import { DepartmentService } from 'src/app/services/department/departement.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private ratingService: RatingService,
    private departmentService: DepartmentService
  ) {}
  clicked: boolean = true;
  userData!: any;
  newUserData: any = {
    firstname: '',
    lastname: '',
    email: '',
    academicYear: '',
    department: '',
  };

  ratingsByUser: any;
  userDepartment: any;

  ngOnInit() {
    const user = this.tokenService.getUserData();
    console.log(user);

    this.departmentService
      .getDepartmentById(user.department)
      .subscribe((res) => {
        console.log(res.departmentName);
        this.newUserData.department = res.departmentName;
        console.log(this.newUserData);
      });

    this.ratingService
      .getRatingsByUserId(user.id)
      .subscribe((ratings) => (this.ratingsByUser = ratings));

    this.newUserData.firstname = user.firstname;
    this.newUserData.lastname = user.lastname;
    this.newUserData.email = user.email;
    this.newUserData.academicYear = user.academicYear;
    this.newUserData.department = user.department;

    console.log(this.userData);
  }
  editSection() {
    const button = document.querySelector('.edit');
    if (button!.innerHTML == 'Done') {
      button!.innerHTML = 'Edit';
      this.clicked = true;
    } else {
      button!.innerHTML = 'Done';
      this.clicked = false;
      this.authService.updateUser;
    }
  }
}
