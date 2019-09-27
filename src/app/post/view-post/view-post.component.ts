import { Component, OnInit } from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { PostModel } from '../post.model';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  postId: Number;
  post: PostModel;
  
  constructor(private activateRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.postId = this.activateRoute.snapshot.params['id'];
    this.postService.getPost(this.postId).subscribe(data => {
        this.post = data;
    }, error => {
        console.log('Failure ' + error);
    });
  }

  postComment(){

  }

}
