import { Injectable } from '@angular/core';
import { Job } from '../job';
import { JOBS } from '../mock-jobs';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor() { }

  // getJobs(): Job[] {
  //   return JOBS;

    getJobs(): Observable<Job[]> {
      return of(JOBS);
    }

    
  }
