import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-unhealthy',
  templateUrl: './unhealthy.component.html',
  styleUrls: ['./unhealthy.component.scss']
})
export class UnhealthyComponent implements OnInit {
  data: Object[];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.adminService.getUnhealthy().subscribe(
      data => {
        console.log(data['data']);
        this.data = data['data'];
      },
      error => console.log(error)
    );
  }

  makeHealthy(item) {
    this.adminService.disableUnhealthy(item['_id']).subscribe(
      data => {
        alert('success');
        this.loadData();
      },
      error => console.log(error)
    );
  }

}
