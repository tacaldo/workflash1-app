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

  job: Job;



  constructor(private jobService: JobService) { }
    
  
  ngOnInit() {
    // this.getJobs();
    this.getJobs2();
    this.getJobs3();

    
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

    getJobs2(): void {
      this.jobService.getJobs2()
      .subscribe(
        (data: Job[]) => this.jobs = data,
        (err: any) => console.log(err),
        () => console.log('All done with getJobs2..')
      );
    }




    getJobs3(): void {
      this.jobService.getJobs3()
      console.log('After getJobs3 reference...')

    }








    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.jobService.addJob({ name } as Job)
        .subscribe(job => {
          this.jobs.push(job);
        });

        //testing
        alert('hit job add part..');
    }

    delete(job: Job): void {
      this.jobs = this.jobs.filter(j => j !== job);
      this.jobService.deleteJob(job).subscribe();
    }
      
  private newMethod(job: Job) {
    alert('testthispopup...for:\n' + job.name);
  }
}


