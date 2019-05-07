import { Injectable } from '@angular/core';
import { Job } from '../job';
// import { JOBS } from '../mock-jobs';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

    // URL to web api
    //private jobsUrl = 'api/jobs';  

    //https://localhost:44365/api/jobs
    private jobsUrl = '//localhost:44365/api/jobs';




    
  /** GET heroes from the server */
  getJobs (): Observable<Job[]> {
    
    console.log('reached getJobs() before http.get call..')
    this.log('fetched job test before tap')

    return this.http.get<[Job]>(this.jobsUrl)
      .pipe(
        tap(_ => this.log(`fetched job test in tap ref..`)),
        catchError(this.handleError('getJobs', []))
      );
    

  }

  getJobs2 (): Observable<Job[]> {
    
    console.log('reached getJobs2() before http.get call..')
    this.log('fetched getJobs2() job test before tap')

    return this.http.get<Job[]>(this.jobsUrl);
      // .pipe(
      //   tap(_ => this.log(`fetched job test in tap ref getJobs2()..`)),
      //   catchError(this.handleError('getJobs2', []))
      // );
  }



getJobs3(): void{
  var data = null;

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  
  xhr.open("GET", "https://localhost:44365/api/jobs");
  // xhr.setRequestHeader("cache-control", "no-cache");
  // xhr.setRequestHeader("Postman-Token", "8667c38a-4d34-49cc-95ee-d75ca9556618");
  
  xhr.send(data);

}













  /** GET job by id. Will 404 if id not found */
  getJob(id: number): Observable<Job> {
    const url = `${this.jobsUrl}/${id}`;
    return this.http.get<Job>(url).pipe(
      tap(_ => this.log(`fetched job id=${id}`)),
      catchError(this.handleError<Job>(`getHero id=${id}`))
    );
  }

  /** PUT: update the job on the server */
updateJob (job: Job): Observable<any> {
  return this.http.put(this.jobsUrl, job, httpOptions).pipe(
    tap(_ => this.log(`updated job id=${job.id}`)),
    catchError(this.handleError<any>('updateJob'))
  );
}

/** POST: add a new hero to the server */
addJob (job: Job): Observable<Job> {
  return this.http.post<Job>(this.jobsUrl, job, httpOptions).pipe(
    tap((job: Job) => this.log(`added job w/ id=${job.id}`)),
    catchError(this.handleError<Job>('addJob'))
  );
}

/** DELETE: delete the job from the server */
deleteJob (job: Job | number): Observable<Job> {
  const id = typeof job === 'number' ? job : job.id;
  const url = `${this.jobsUrl}/${id}`;

  return this.http.delete<Job>(url, httpOptions).pipe(
    tap(_ => this.log(`deleted job id=${id}`)),
    catchError(this.handleError<Job>('deleteJob'))
  );
}

/* GET heroes whose name contains search term */
searchJobs(term: string): Observable<Job[]> {
  if (!term.trim()) {
    // if not search term, return empty job array.
    return of([]);
  }
  return this.http.get<Job[]>(`${this.jobsUrl}/?name=${term}`).pipe(
    tap(_ => this.log(`found jobs matching "${term}"`)),
    catchError(this.handleError<Job[]>('searchJobs', []))
  );
}



    /** Log a JobService message with the MessageService */
    private log(message: string) {
      this.messageService.add(`JobService: ${message}`);
    }

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  }
