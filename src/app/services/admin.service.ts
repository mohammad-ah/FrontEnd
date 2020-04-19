import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filter } from '../models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient ) { }

  getFiltered() {
    return this.httpClient.get('https://lilcpanda-server.herokuapp.com/admin/filtered');
  }

  editFilter(word: string) {
    return this.httpClient.post('https://lilcpanda-server.herokuapp.com/admin/addFilter', {word});
  }

  pushAd(fd: FormData) {
    return this.httpClient.post('https://lilcpanda-server.herokuapp.com/admin/pushAd', fd);
  }

  getUnhealthy() {
    return this.httpClient.get('https://lilcpanda-server.herokuapp.com/admin/unhealthy-post');
  }

  disableUnhealthy(id) {
    return this.httpClient.post('https://lilcpanda-server.herokuapp.com/admin/disable-unhealthy', {id});
  }

  getActivations() {
    return this.httpClient.get('https://lilcpanda-server.herokuapp.com/admin/activations');
  }

  acceptActivation(id) {
    return this.httpClient.post('https://lilcpanda-server.herokuapp.com/admin/accept-activation', {id});
  }

  refuseActivation(id) {
    return this.httpClient.post('https://lilcpanda-server.herokuapp.com/admin/refuse-activation', {id});
  }
}
