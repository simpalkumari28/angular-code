import { Component, OnInit } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { PostService } from '../post.service';
import { PostModel } from '../post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faComments = faComments;
  posts: PostModel[] = [];

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    })
  }

  ngOnInit() {
  }

}
