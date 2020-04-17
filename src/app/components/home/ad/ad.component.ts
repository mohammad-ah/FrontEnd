import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnInit {
  ad: Object;
  constructor(private adService: AdService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.adService.getAd().subscribe(
      data => {
        console.log(data['data']);
        this.ad = data['data'];
      },
      error => console.log(error)
    );
  }
}
