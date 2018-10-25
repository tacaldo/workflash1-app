import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../job';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {


  //TODO
  @Input() job: Job;

  constructor() { }

  ngOnInit() {
  }

}
