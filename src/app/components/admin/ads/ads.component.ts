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
    const fd = new FormData();
    fd.append('text', this.text);
    fd.append('image', this.image);
    fd.append('isAll', this.aString(this.isAll));
    this.adminService.pushAd(fd).subscribe(
      data => {
        alert('ad pushed');
      },
      error => console.log(error)
    );
  }

  imageSelected(event: Event) {
    this.image = event.target['files'][0];
  }

  aBoolean(fd): boolean {
    return fd.get('aBoolean') === 'true' ? true : false;
  }

  aString(val: boolean): string {
   return val ? 'true' : 'false';
  }

}
