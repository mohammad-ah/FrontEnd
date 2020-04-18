import {Component, OnChanges, OnInit} from '@angular/core';
import {SharedDataService} from "../../services/sharedData.service";
import {AuthenticationService} from "../../services/authentication.service";
import * as PostActions from "../../store/actions/post.actions";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  skip;
  limit;
  userId;
  userName;
  posts;
  search;

  constructor(private sharedDataService: SharedDataService, private auth: AuthenticationService, private http: HttpClient,
              private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      console.log(params['params']['search'])
      this.search = params['params']['search'];
      this.posts = [];
      this.loadPosts();
    });
  }


  ngOnInit(): void {
    this.posts = [];
    this.skip = 0;
    this.limit = 10;

    this.userId = this.auth.getId();

    this.userName = this.auth.getName();

    this.sharedDataService.setsShowNotification(false);

    this.loadPosts();
  }

  loadPosts() {
    console.log('loaded')
    this.http.get('http://localhost:3000/post/search/' + this.userId + '&' + this.search + '&' + this.skip + '&' + this.limit)
      .subscribe(data => {
        const d = data['posts'];
          this.posts = this.posts.concat(d);
          console.log(this.posts);
          console.log(d);
        },
        error => {
          console.log(error);
        });
  }

  loadMorePosts() {
    this.skip += this.limit;
    this.loadPosts();
  }

}
