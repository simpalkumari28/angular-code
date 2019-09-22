import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarViewSubredditComponent } from './sidebar-view-subreddit.component';

describe('SidebarViewSubredditComponent', () => {
  let component: SidebarViewSubredditComponent;
  let fixture: ComponentFixture<SidebarViewSubredditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarViewSubredditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarViewSubredditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
