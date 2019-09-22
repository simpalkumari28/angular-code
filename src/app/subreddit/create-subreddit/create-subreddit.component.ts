import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-subreddit',
  templateUrl: './create-subreddit.component.html',
  styleUrls: ['./create-subreddit.component.css']
})
export class CreateSubredditComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  discardPost() {
    this.router.navigateByUrl("/");
  }
}
