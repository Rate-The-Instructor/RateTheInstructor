import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorReviewComponent } from './components/instructor-review/instructor-review.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rate/:instructorId', component: InstructorReviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
