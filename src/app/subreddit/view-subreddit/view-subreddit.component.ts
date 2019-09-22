import { Component, OnInit } from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-subreddit',
  templateUrl: './view-subreddit.component.html',
  styleUrls: ['./view-subreddit.component.css']
})
export class ViewSubredditComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  constructor() { }

  ngOnInit() {
  }

}
