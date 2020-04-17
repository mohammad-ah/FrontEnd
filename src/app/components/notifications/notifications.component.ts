import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  userId;
  notifications;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.userId = '5e8bcb6c258256022cac8a0c';
    this.http.get('http://127.0.0.1:3000/notifications/get/' + this.userId)
      .subscribe(data => {
          console.log(data);
          this.notifications = data['notifications'];

          this.notifications.forEach(notification =>  {
            this.http.post('http://127.0.0.1:3000/notifications/read/' + notification['_id'] + '/' + this.userId, {})
              .subscribe(postData => {
                  console.log(postData);
                },
                error => {
                  console.log(error);
                });
          });
        },
        error => {
          console.log(error);
        });
  }

}
