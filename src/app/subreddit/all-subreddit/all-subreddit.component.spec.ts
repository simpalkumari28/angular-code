import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSubredditComponent } from './all-subreddit.component';

describe('SubredditComponent', () => {
  let component: AllSubredditComponent;
  let fixture: ComponentFixture<AllSubredditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSubredditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSubredditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
