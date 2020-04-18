import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../services/authentication.service";
import {SharedDataService} from "../../services/sharedData.service";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  userId;
  notifications;

  constructor(private http: HttpClient, private auth: AuthenticationService, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.userId = this.auth.getId();
    this.http.get('http://127.0.0.1:3000/notifications/get/' + this.userId)
      .subscribe(data => {
          console.log(data);
          this.notifications = data['notifications'];

          if (this.notifications.length > 0) {
            this.sharedDataService.setsShowNotification(true);
          }

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
