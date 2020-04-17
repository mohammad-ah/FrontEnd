import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {
  followings;
  userId;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.userId = '5e8bcb8fcec44089e8c21178';
    this.http.get('http://127.0.0.1:3000/user/' + this.userId + '/followings')
      .subscribe(data => {
          console.log(data);
          this.followings = data['followings'];
        },
        error => {
          console.log(error);
        });
  }

  unfollow(_id: any) {
    this.http.post('http://127.0.0.1:3000/user/unfollow', {
      followingId: _id,
      followerId: this.userId
    })
      .subscribe(data => {
          console.log(data);
          window.location.reload();
        },
        error => {
          console.log(error);
        });
  }
}
