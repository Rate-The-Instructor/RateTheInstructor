import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}

  hide = true;

  signUpData = {
    username: '',
    schoolId: '',
    email: '',
    password: '',
    department: '',
    academicYear: 1,
  };

  departmentNames: any = ['SiTE', 'SMiE', 'SECE', 'SCEE', 'SCBE', 'CBME'];

  departments: any = {
    SiTE: '63f480a5fea0517ef6834071',
    SMiE: '63f480b8fea0517ef6834073',
    SECE: '63f480c1fea0517ef6834075',
    SCEE: '63f480d2fea0517ef6834077',
    SCBE: '63f480dbfea0517ef6834079',
    CBME: '63f480e8fea0517ef683407b',
  };

  ngOnInit() {}

  handleSignup() {
    console.log(this.signUpData);
    this.authService.signup(this.signUpData).subscribe(
      (res) => {
        alert('Account created, you will be redirected to the login page!');
        this.router.navigate(['/login']);
      },
      (error) => alert('Oops an error occured, please try again!')
    );
  }
}
