import { Component, OnInit } from '@angular/core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  
  constructor() { }

  ngOnInit() {
  }

}
