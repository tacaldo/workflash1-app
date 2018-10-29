import { Component, OnInit } from '@angular/core';
// import { JOBS } from '../mock-jobs';
import { Job } from '../job';
import { JobService } from '../services/job.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  // selectedJob: Job;

  //jobs = JOBS;
  jobs: Job[];



  constructor(private jobService: JobService) { }


  ngOnInit() {
    this.getJobs();
  }

    // onSelect(job: Job): void {
    // this.selectedJob = job;
    // this.newMethod(job);
    // }


    // getJobs(): void {
    //   this.jobs = this.jobService.getJobs();
    // }
    getJobs(): void {
      this.jobService.getJobs()
          .subscribe(jobs => this.jobs = jobs);
    }

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.jobService.addJob({ name } as Job)
        .subscribe(job => {
          this.jobs.push(job);
        });
    }

  
  private newMethod(job: Job) {
    alert('testthispopup...for:\n' + job.name);
  }
}


