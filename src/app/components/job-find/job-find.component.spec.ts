import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFindComponent } from './job-find.component';

describe('JobFindComponent', () => {
  let component: JobFindComponent;
  let fixture: ComponentFixture<JobFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
