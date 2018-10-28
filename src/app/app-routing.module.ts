import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent }      from './jobs/jobs.component';
import { DashboardComponent }   from 'src/app/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'jobs', component: JobsComponent }
];


@NgModule({

  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]


})
export class AppRoutingModule {}
