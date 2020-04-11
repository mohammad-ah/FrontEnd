import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {PostState} from "../../store/states/post.state";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as PostActions from "../../store/actions/post.actions";
import {Observable} from "rxjs";
import {Post} from "../../models/post.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  posts: Observable<Post[]>;

  name;
  mSources: any;
  mArticles: any;

  constructor(private store: Store<PostState>, private http: HttpClient) {
    this.posts = store.select('posts');
    console.log(this.posts);
  }

  ngOnInit(): void {
    this.store.dispatch(new PostActions.AddPost({text: 'aaaaa', username: 'amad', imgUrl: null}));

    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    console.log('inside');
    // this.http.get('http://127.0.0.1:3000/get-posts/5e8bcb6c258256022cac8a0c&0&20', {headers}
    // ).subscribe(data => {
    //     console.log(data);
    //   },
    //   error => {
    //     console.log(error);
    //   });
  }

  searchArticles(id: any) {

  }
}
