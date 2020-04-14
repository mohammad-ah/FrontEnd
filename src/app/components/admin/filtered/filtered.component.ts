import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Filter } from 'src/app/models/filter.model';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.scss']
})
export class FilteredComponent implements OnInit {

  data: Filter[];
  isAddOrEdit = false;
  editWord = "";

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.loadData();
  }

  switchAddEdit() {
    this.isAddOrEdit = !this.isAddOrEdit;
  }

  loadData() {
    this.adminService.getFiltered().subscribe(
      data => {
        console.log(data['data']);
        this.data = data['data'];
      },
      error => console.log(error)
    );
  }

  editDone() {
    this.adminService.editFilter(this.editWord).subscribe(
      data => {
        console.log('success');
        this.switchAddEdit();
        this.editWord = "";
        this.loadData();
      },
      error => console.log(error)
    );
  }

  editMe(item: Filter) {
    this.editWord = item.word;
    this.switchAddEdit();
  }

}
