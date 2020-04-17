import { Component, OnInit } from '@angular/core';
import {SharedDataService} from '../../services/sharedData.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  newNotifications;

  constructor(private sharedDataService: SharedDataService) {
  }

  ngOnInit(): void {
    this.sharedDataService.getsNewNotification().subscribe(data => {
      console.log('observing', data);
      this.newNotifications = data;
      console.log(this.newNotifications);
    });
    console.log('notific', this.newNotifications);
  }
}
