import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

  text: string;
  image: string;
  isAll: boolean;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  pushAd() {
    this.adminService.pushAd({
      text: this.text,
      image: this.image,
      isAll: this.isAll
    }).subscribe(
      data => {
        alert('ad pushed');
      },
      error => console.log(error)
    );
  }

}
