import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient ) { }

  getFiltered() {
    this.httpClient.get('http://localhost:3000/admin/filtered')
    .subscribe(
      data => console.log(data['data']),
      error => console.log(error)
    );
  }
}
