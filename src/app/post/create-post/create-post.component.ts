import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostModel } from '../post.model';
import { CreatePostPayload } from './create-post-payload';
import { PostService } from '../post.service';
import { SubredditService } from 'src/app/subreddit/subreddit.service';
import { SubredditModel } from 'src/app/subreddit/subreddit-model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;
  postPayload: CreatePostPayload;
  subreddits: SubredditModel[];

  constructor(private router: Router, private formBuilder: FormBuilder, private postService: PostService, private subredditService: SubredditService) {
    this.postPayload = {
      postName: '',
      url: '',
      description: '',
      subredditName:''
    }
  }

  ngOnInit() {
    this.createPostForm = this.formBuilder.group({
      postName: ['', Validators.required],
      subredditName: ['', Validators.required],
      url: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.subredditService.getAllSubreddits().subscribe((data) => {
      this.subreddits = data;
    }, error => {
      console.log("Error : " + error);
    });
  }

  createPost() {
    this.postPayload.postName = this.createPostForm.get('postName').value;
    this.postPayload.subredditName = this.createPostForm.get('subredditName').value;
    this.postPayload.url = this.createPostForm.get('url').value;
    this.postPayload.description = this.createPostForm.get('description').value;

    this.postService.createPost(this.postPayload).subscribe((data) => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log('error ' + error);
    })
  }

  discardPost() {
    this.router.navigateByUrl("/");
  }
}
