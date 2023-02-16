import { Router } from '@angular/router';
import {  Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  isAdminPanel = false;

  constructor(private location: Location, private router: Router){

    this.router.events.subscribe((val) => this.isAdminPanel = this.location.path().startsWith('/admin'))
    
    this.isAdminPanel = this.location.path().startsWith('/admin');
    console.log('Window starts with ', this.location.path().startsWith('/admin'))
  }
  
}
