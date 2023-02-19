import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  hide = true;

  signUpData = {
    firstname: '',
    lastname: '',
    username: '',
    schoolId: '',
    email: '',
    password: '',
    department: '',
    academicYear: 1,
  };

  ngOnInit() {}

  handleSubmit(formData: any) {}
}
