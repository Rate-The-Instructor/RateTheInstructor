import { Component } from '@angular/core';
import { TokenService } from 'src/app/services/token/token.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  constructor(
    private tokenService: TokenService,
    private authService: AuthService
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

  ngOnInit() {
    const user = this.tokenService.getUserData();

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
