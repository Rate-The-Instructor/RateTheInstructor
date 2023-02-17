import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ReportTableComponent } from './components/report-table/report-table.component';
import { ReviewTableComponent } from './components/review-table/review-table.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { InstructorProfileComponent } from './components/instructor-profile/instructor-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorReviewInputComponent } from './components/instructor-review-input/instructor-review-input.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundpageComponent } from './components/not-foundpage/not-foundpage.component';
import { InstructorsListPageComponent } from './pages/instructors-list-page/instructors-list-page.component';
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'rate/:instructorId', component: InstructorReviewInputComponent },
  { path: 'instructors/:instructorId', component: InstructorProfileComponent },
  { path: 'instructors', component: InstructorsListPageComponent },

  { path: 'admin/reviews', component: ReviewTableComponent },
  { path: 'admin/reports', component: ReportTableComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '**', component: NotFoundpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
