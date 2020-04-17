import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private httpClient: HttpClient) { }

  getAd() {
    return this.httpClient.get('http://localhost:3000/admin/ad');
  }
}
