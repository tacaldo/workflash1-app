import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs(): void {
    this.jobService.getJobs()
    .subscribe(jobs => this.jobs = jobs.slice(1, 5));
  }
}


