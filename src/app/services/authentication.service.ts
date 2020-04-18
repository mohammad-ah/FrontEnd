import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token;
  private id;
  private name;
  private followers;

  constructor(private http: HttpClient, private router: Router) { }

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private saveId(id: any | string) {
    localStorage.setItem('mean-id', id);
    this.id = id;
  }

  private saveName(name: any | string) {
    localStorage.setItem('mean-name', name);
    this.name = name;
  }

  private saveFollowers(followers: any ) {
    localStorage.setItem('mean-followers', followers);
    this.followers = followers;
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public getId(): string {
    if (!this.id) {
      this.id = localStorage.getItem('mean-id');
    }
    return this.id;
  }

  public getName(): string {
    if (!this.name) {
      this.name = localStorage.getItem('mean-id');
    }
    return this.name;
  }

  public getFollowers(): string {
    if (!this.followers) {
      this.followers = localStorage.getItem('mean-followers');
    }
    return this.followers;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }

  public getUserDetails() {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(method: 'post'|'get', type: 'login'|'register', user?): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post('https://lilcpanda-server.herokuapp.com/user/' + type, user);
    } else {
      base = this.http.get('https://lilcpanda-server.herokuapp.com/' + type, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    console.log(base);

    const request = base.pipe(
      map((data) => {
        console.log(data)
        if (data['token']) {
          this.saveToken(data['token']);
          this.saveId(data['user']._id);
          this.saveName(data['user'].username);
          this.saveFollowers(data['user'].followers);
          console.log(data['user']);
        }
        return data;
      })
    );

    return request;
  }

  public login(user): Observable<any> {
    console.log(user)
    return this.request('post', 'login', user);
  }


  register(value: any) {
    return this.request('post', 'register', value);

  }
}

