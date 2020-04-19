import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  userid;
  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.userid = this.auth.getId();
  }

}
