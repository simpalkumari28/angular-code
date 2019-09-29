import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VotePayload } from 'src/app/post/vote.payload';
import { VoteService } from 'src/app/post/vote.service';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { VoteType } from 'src/app/post/votetype';
import { PostModel } from 'src/app/post/post.model';
import { PostService } from 'src/app/post/post.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'votebutton',
  templateUrl: './votebutton.component.html',
  styleUrls: ['./votebutton.component.css']
})
export class VotebuttonComponent implements OnInit {

  @Input() post: PostModel;
  votePayload: VotePayload;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  upvoteColor: string;
  downvoteColor: string;

  constructor(private voteService: VoteService, private postService: PostService, private authService: AuthService) {
    this.votePayload = {
      voteType: undefined,
      postId: undefined
    }
    this.voteService.postChange.subscribe(post => this.post = post);
  }

  ngOnInit() {
    this.postService.getPost(this.post.id).subscribe(post => this.post = post);
    this.upvoteColor = this.post.upVote ? this.setColorWhenUpVoteAndUserLoggedIn() : "";
    this.downvoteColor = this.post.downVote ? this.setColorWhenDownVoteAndUserLoggedIn() : "";
  }


  upvotePost() {
    this.votePayload.voteType = VoteType.UPVOTE;
    this.vote();
    this.upvoteColor = this.post.upVote ? this.setColorWhenUpVoteAndUserLoggedIn() : "";
  }

  downvotePost() {
    this.votePayload.voteType = VoteType.DOWNVOTE;
    this.vote();
    this.downvoteColor = this.post.downVote ? this.setColorWhenDownVoteAndUserLoggedIn() : "";
  }


  private vote() {
    this.votePayload.postId = this.post.id;
    this.voteService.vote(this.votePayload);
  }

  private setColorWhenUpVoteAndUserLoggedIn() {
    if (this.authService.isLoggedIn) {
      this.downvoteColor = "";
      return "green";
    }
    return "";
  }

  private setColorWhenDownVoteAndUserLoggedIn() {
    if (this.authService.isLoggedIn) {
      this.upvoteColor = "";
      return "red";
    }
    return "";
  }

}
