import { Component, OnInit, Input } from '@angular/core';
import { CommentPayload } from 'src/app/post/commentpayload';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() data: CommentPayload[];

  constructor() { }

  ngOnInit() {
  }

}
