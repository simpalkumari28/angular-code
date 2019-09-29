import { Component, OnInit } from '@angular/core';
import { SubredditService } from 'src/app/subreddit/subreddit.service';
import { SubredditModel } from 'src/app/subreddit/subreddit-model';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar-view-subreddit',
  templateUrl: './sidebar-view-subreddit.component.html',
  styleUrls: ['./sidebar-view-subreddit.component.css']
})
export class SidebarViewSubredditComponent implements OnInit {

  subreddits: SubredditModel[];
  displayViewAll: Boolean;

  constructor(private subredditService: SubredditService, private router: Router) { }

  ngOnInit() {
    this.subredditService.getAllSubreddits().subscribe(subreddit => {
      if (subreddit.length > 3) {
        this.subreddits = subreddit.splice(0, 2);
        this.displayViewAll = true;
      } else {
        this.subreddits = subreddit;
      }
    })
  }

  goToSubreddit(subredditName: string) {
    this.router.navigateByUrl('/view-subreddit/' + subredditName);
  }

}
