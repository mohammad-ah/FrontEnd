import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.scss']
})
export class FilteredComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getFiltered();
  }

}
