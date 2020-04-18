import { Component, OnInit } from '@angular/core';
import {SharedDataService} from '../../services/sharedData.service';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  newNotifications;
  search;

  constructor(private sharedDataService: SharedDataService, public auth: AuthenticationService, private router: Router) {
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

  searchR() {
    console.log(this.search)
    this.router.navigate(['/search'], {
      queryParams: {search: this.search}
    });
    // this.router.navigate(['/search/' + this.search]);
    // // window.location.reload();
  }
}
