import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from './../../services/auth/auth.service';
import { Component } from '@angular/core';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;

  loginData = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private tokenService: TokenService, private router: Router){}

  loggedInUser: any

  ngOnInit() {
    
  }

  handleSubmit(){
    console.log(this.loginData)
    this.authService.login(this.loginData).subscribe(data => {
      console.log(data)

      this.tokenService.setJWTtoken(data.access_token);
      console.log(data)
      this.tokenService.setUserData(data);

      this.authService.setUser();

      const navigationExtras: NavigationExtras = {
        state: {
          reload: true
        }
      };

      alert('Logged In succesfully!')

      this.router.navigate(['/']);

    })
  }
}
