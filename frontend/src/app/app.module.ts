import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingSystemComponent } from './components/rating-system/rating-system.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, NgbModule, BrowserAnimationsModule],
  declarations: [AppComponent, SignupComponent, RatingSystemComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
