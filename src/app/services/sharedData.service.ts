import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  newNotification = new Subject();
  newNotification$ = this.newNotification.asObservable();
  posts = [];

  constructor() { }

  getsNewNotification(): Observable<any> {
    return this.newNotification$;
  }

  setsShowNotification(newNot: boolean) {
    this.newNotification.next(newNot);
  }
}
