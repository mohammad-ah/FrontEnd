import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {

  @Output() adsClicked: EventEmitter<any> = new EventEmitter();
  @Output() filteredClicked: EventEmitter<any> = new EventEmitter();
  @Output() unhealthyClicked: EventEmitter<any> = new EventEmitter();
  @Output() activationsClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
