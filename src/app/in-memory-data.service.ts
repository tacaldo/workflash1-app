import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Job } from './job';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const jobs = [
      { id: 11, name: 'Warehouse Helper' },
      { id: 12, name: 'Landscaper Helper' },
      { id: 13, name: 'Painter' },
      { id: 14, name: 'Construction Cleanup' },
      { id: 15, name: 'Roofing' },
      { id: 20, name: 'Move Furniture' }
    ];
    return {jobs};
  }

  // Overrides the genId method to ensure that a job always has an id.
  // If the jobs array is empty,
  // the method below returns the initial number (11).
  // if the jobs array is not empty, the method below returns the highest
  // job id + 1.
  genId(jobs: Job[]): number {
    return jobs.length > 0 ? Math.max(...jobs.map(job => job.id)) + 1 : 11;
  }
}

