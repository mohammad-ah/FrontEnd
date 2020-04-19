import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username;
  email;
  msg;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.msg = '';
    this.username = this.auth.getName();
    this.email = this.auth.getEmail();
  }

  submit() {
    this.msg = 'Updated Successfully';
  }
}
