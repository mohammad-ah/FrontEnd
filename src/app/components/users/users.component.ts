import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users;
  userId;
  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.userId = this.userId = this.auth.getId();

    this.http.post('https://lilcpanda-server.herokuapp.com/user/list', {
      id: this.userId
    })
      .subscribe(data => {
          console.log(data);
          this.users = data['users'];
        },
        error => {
          console.log(error);
        });
  }

  follow(id: any) {
    this.http.post('https://lilcpanda-server.herokuapp.com/user/follow', {
      id: this.userId,
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
