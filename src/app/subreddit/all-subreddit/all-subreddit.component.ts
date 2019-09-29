import { Component, OnInit } from '@angular/core';
import { SubredditService } from '../subreddit.service';
import { SubredditModel } from '../subreddit-model';

@Component({
  selector: 'all-subreddit',
  templateUrl: './all-subreddit.component.html',
  styleUrls: ['./all-subreddit.component.css']
})
export class AllSubredditComponent implements OnInit {

  subreddits: SubredditModel[];

  constructor(private subredditService: SubredditService) { }

  ngOnInit() {
    this.subredditService.getAllSubreddits().subscribe(data => {
      this.subreddits = data;
    }, error => {
      console.log(error);
    })
  }

}
