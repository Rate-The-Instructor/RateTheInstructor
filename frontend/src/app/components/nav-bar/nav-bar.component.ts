import { AuthService } from './../../services/auth/auth.service';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationExtras,
  Router,
} from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';
import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  searchTerm = '';
  loggedInUser: any;
  showSearchBar: boolean = false;

  constructor(
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthService,
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(this.router.url);
        this.showSearchBar = this.router.url === '/instructors';
      }
    });

    this.authService.userSubject.subscribe(
      (newUser) => (this.loggedInUser = newUser)
    );
  }

  logout() {
    this.tokenService.removeTokens();
    this.loggedInUser = undefined;

    this.authService.setUser();

    this.authService.userSubject.next(null);

    this.router.navigate(['/']);
  }

  handleSearchChange(event: any) {
    const searchString = event.target.value;
    console.log('Got search value .. sending to subject');
    this.searchService.changeSearchValue(searchString);
  }
}
