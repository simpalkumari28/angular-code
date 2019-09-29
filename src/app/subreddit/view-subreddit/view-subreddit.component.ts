import { Component, OnInit } from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { SubredditService } from '../subreddit.service';
import { PostService } from 'src/app/post/post.service';
import { PostModel } from 'src/app/post/post.model';

@Component({
  selector: 'app-view-subreddit',
  templateUrl: './view-subreddit.component.html',
  styleUrls: ['./view-subreddit.component.css']
})
export class ViewSubredditComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  subredditId: Number;
  subredditName: string;
  posts: PostModel[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService, private subredditService: SubredditService) {
    this.subredditId = this.activatedRoute.snapshot.params['id'];
    this.subredditService.getSubreddit(this.subredditId).subscribe(data => {
      this.subredditName = data.name;
    }, error => {

    })
    this.postService.getAllPostsBySubreddit(this.subredditId).subscribe(data => {
      this.posts = data;
    }, error => {
      console.log(error);
    })
  }

  ngOnInit() {
  }

}
