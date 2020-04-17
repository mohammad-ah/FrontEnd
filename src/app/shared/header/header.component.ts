import { Component, OnInit } from '@angular/core';
import {SharedDataService} from '../../services/sharedData.service';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  newNotifications;

  constructor(private sharedDataService: SharedDataService, public auth: AuthenticationService) {
  }

  ngOnInit(): void {
    this.sharedDataService.getsNewNotification().subscribe(data => {
      console.log('observing', data);
      this.newNotifications = data;
      console.log(this.newNotifications);
    });
    console.log('notific', this.newNotifications);
  }

  logout() {
    console.log('out')
    this.auth.logout();
  }
}
