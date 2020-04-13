import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filter } from '../models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient ) { }

  getFiltered() {
    return this.httpClient.get('http://localhost:3000/admin/filtered');
  }

  editFilter(word: string) {
    return this.httpClient.post('http://localhost:3000/admin/addFilter', {word});
  }
}
