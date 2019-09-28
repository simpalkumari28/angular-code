import { Component, OnInit } from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { PostModel } from '../post.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommentPayload } from '../commentpayload';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  commentForm: FormGroup;
  commentPayload: CommentPayload;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  postId: Number;
  post: PostModel;
  comments: CommentPayload[];

  constructor(private formBuilder: FormBuilder, private activateRoute: ActivatedRoute, private postService: PostService, private router: Router) {
    this.commentForm = this.formBuilder.group({
      text: ['', Validators.required]
    });
    this.postId = this.activateRoute.snapshot.params['id'];
    this.commentPayload = {
      text: '',
      postId: this.activateRoute.snapshot.params['id']
    }
    this.getCommentsForPost();
  }

  ngOnInit() {
    this.postService.getPost(this.postId).subscribe(data => {
      this.post = data;
    }, error => {
      console.log('Failure ' + error);
    });
  }

  postComment() {
    this.commentPayload.text = this.commentForm.get('text').value;
    this.postService.postComment(this.commentPayload).subscribe(data => {
      this.commentForm.get('text').setValue('');
      this.router.navigateByUrl('/view-post/' + this.postId);
    }, error => {
      console.log("Response Failed");
    })
  }

  private getCommentsForPost() {
    this.postService.getAllComments(this.postId).subscribe(comments => {
      this.comments = comments;
    }, error => {
      console.log("Failure " + error);
    });
  }

}
