import { Component, OnInit } from '@angular/core';
import { JOBS } from '../mock-jobs';
import { Job } from '../job';
import { JobService } from '../services/job.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {


  //jobs = JOBS;
  jobs: Job[];


  selectedJob: Job;

  constructor(private jobService: JobService) { }


  ngOnInit() {
    this.getJobs();
  }

    onSelect(job: Job): void {
    this.selectedJob = job;
    // this.newMethod(job);
    }


    getJobs(): void {
      this.jobs = this.jobService.getJobs();
    }

  private newMethod(job: Job) {
    alert('testthispopup...for:\n' + job.name);
  }
}


