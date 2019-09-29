import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VotePayload } from './vote.payload';
import { PostModel } from './post.model';

@Injectable({
    providedIn: 'root'
})
export class VoteService {
    @Output() postChange: EventEmitter<PostModel> = new EventEmitter<PostModel>();    
    
    constructor(private http: HttpClient) { }

    vote(votePayload: VotePayload): void {
        this.http.post<PostModel>("http://localhost:8080/api/votes/", votePayload).subscribe(data => {
            this.postChange.emit(data);
        }, error => {
            console.log(error);
        });
    }
}