import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;

  loginData = {
    email: '',
    password: '',
  };

  ngOnInit() {}

  handleSubmit(formData: any) {}
}
