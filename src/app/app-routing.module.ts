import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent }      from './jobs/jobs.component';
import { DashboardComponent }   from 'src/app/components/dashboard/dashboard.component';
import { JobDetailComponent }  from './job-detail/job-detail.component';
// import {JobPostComponent} from './components/job-post/job-post.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: JobDetailComponent },
  // { path: 'post', component: JobPostComponent },
  { path: 'jobs', component: JobsComponent }
];


@NgModule({

  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]


})
export class AppRoutingModule {}
