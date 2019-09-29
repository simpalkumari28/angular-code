import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from 'src/app/post/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() data: PostModel[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPost(id: Number) {
    this.router.navigateByUrl('/view-post/' + id);
  }

}
