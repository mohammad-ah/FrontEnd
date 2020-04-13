import { Component, OnInit } from '@angular/core';

enum CurrentPage {
  Ads,
  Filtered,
  Unhealthy,
  Activations
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  currentPage: CurrentPage = CurrentPage.Filtered;

  constructor() { }

  ngOnInit(): void {
  }

  openAdsPage() {
    this.currentPage = CurrentPage.Ads;
  }

  openFilteredPage() {
    this.currentPage = CurrentPage.Filtered;
  }

  openUnhealthyPage() {
    this.currentPage = CurrentPage.Unhealthy;
  }

  openActivationsPage() {
    this.currentPage = CurrentPage.Activations;
  }

  isAdsPage(): boolean {
    return this.currentPage === CurrentPage.Ads;
  }

  isFilteredPage(): boolean {
    return this.currentPage === CurrentPage.Filtered;
  }

  isUnhealthyPage(): boolean {
    return this.currentPage === CurrentPage.Unhealthy;
  }

  isActivationsPage(): boolean {
    return this.currentPage === CurrentPage.Activations;
  }

}
