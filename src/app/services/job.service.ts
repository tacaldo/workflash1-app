import { Injectable } from '@angular/core';
import { Job } from '../job';
import { JOBS } from '../mock-jobs';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private messageService: MessageService) { }


    getJobs(): Observable<Job[]> {
    // TODO: send the message _after_ fetching the heroes
      this.messageService.add('JobService: fetched jobs');
      return of(JOBS);
    }

    getJob(id: number): Observable<Job> {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of(JOBS.find(job => job.id === id));
    }


  }
