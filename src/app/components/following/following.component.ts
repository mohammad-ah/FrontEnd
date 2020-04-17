import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {
  followings;
  userId;

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.userId = this.auth.getId();

    this.http.get('http://127.0.0.1:3000/user/' + this.userId + '/followings')
      .subscribe(data => {
          console.log(data);
          this.followings = data['followings'];
        },
        error => {
          console.log(error);
        });
  }

  unfollow(id: any) {
    this.http.post('http://127.0.0.1:3000/user/unfollow', {
      followingId: id,
      id: this.userId
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
