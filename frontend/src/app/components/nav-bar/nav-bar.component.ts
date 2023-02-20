import { AuthService } from './../../services/auth/auth.service';
import { NavigationExtras, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  searchTerm = '';
  loggedInUser: any;

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.userSubject.subscribe(newUser => this.loggedInUser = newUser)
  }

  logout() {
    this.tokenService.removeTokens();
    this.loggedInUser = undefined;

    this.authService.setUser();

    this.authService.userSubject.next(null);

    this.router.navigate(['/']);
  }
}
