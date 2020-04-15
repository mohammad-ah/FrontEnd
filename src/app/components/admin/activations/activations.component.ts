import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-activations',
  templateUrl: './activations.component.html',
  styleUrls: ['./activations.component.scss']
})
export class ActivationsComponent implements OnInit {
  data: Object[];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.adminService.getActivations().subscribe(
      data => {
        console.log(data['data']);
        this.data = data['data'];
      },
      error => console.log(error)
    );
  }

  accept(user) {
    this.adminService.acceptActivation(user['_id']).subscribe(
      data => {
        alert('success');
        this.loadData();
      },
      error => console.log(error)
    );

  }

  refuse(user) {
    this.adminService.refuseActivation(user['_id']).subscribe(
      data => {
        alert('success');
        this.loadData();
      },
      error => console.log(error)
    );
  }

}
