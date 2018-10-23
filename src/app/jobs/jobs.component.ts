import { Component, OnInit } from '@angular/core';
// import { Job } from '../job';
import { JOBS } from '../mock-jobs';
import { Job } from '../job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {


  jobs = JOBS;

  selectedJob: Job;

  constructor() { }



  ngOnInit() {
  }

    onSelect(job: Job): void {
    this.selectedJob = job;
    // alert('testthispopup...for:\n' + job.name);
    }

}


