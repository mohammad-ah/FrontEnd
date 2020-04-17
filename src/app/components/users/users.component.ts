import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;
  userId;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.userId = '5e8bcb6c258256022cac8a0c';
    this.http.get('http://127.0.0.1:3000/user/list')
      .subscribe(data => {
          console.log(data);
          this.users = data['users'];
        },
        error => {
          console.log(error);
        });
  }

  follow(id: any) {
    this.http.post('http://127.0.0.1:3000/user/follow', {
      followingId: this.userId,
      followerId: id
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
