import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {

  hide = true;

  signUpData = {
    email: '',
    password: '',
    department: '',
    year: 1
  }

  ngOnInit() {}

  handleSubmit(formData: any) {}
}
