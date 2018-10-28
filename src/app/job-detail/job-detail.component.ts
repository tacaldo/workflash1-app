import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../job';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { JobService }  from 'src/app/services/job.service';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {


  //TODO
  @Input() job: Job;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private location: Location
  ) {}



  ngOnInit(): void {
    this.getJob();
  }
  
  getJob(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jobService.getJob(id)
      .subscribe(job => this.job = job);
  }

  goBack(): void {
    this.location.back();
  }
  
}
