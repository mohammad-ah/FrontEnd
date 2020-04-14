import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {PostState} from '../../store/states/post.state';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as PostActions from '../../store/actions/post.actions';
import {Observable} from 'rxjs';
import {Post} from '../../models/post.model';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  posts: Observable<Post[]>;
  delIdx = null;
  postIdx = null;
  skip = 0;
  limit = 20;
  userId = null;

  constructor(private store: Store<PostState>, private http: HttpClient) {
    this.posts = store.select('posts');
    // console.log(this.posts);
  }

  ngOnInit(): void {
    this.skip = 0;
    this.limit = 20;

    this.userId = '5e8bcb8fcec44089e8c21178';

    this.loadPosts();
  }

  showDeleteSection(index) {
    if (this.delIdx === index){
      this.delIdx = null;
    } else {
      this.delIdx = index;
    }
  }

  showCommentsSection(index) {
    if (this.postIdx === index){
      this.postIdx = null;
    } else {
      this.postIdx = index;
    }
  }

  deletePost(index: any, id: any) {
    const res = this.posts.pipe(first()).subscribe(result => {
      console.log(result);
      // const index = result.findIndex(objInItems => new String(objInItems.post['_id']).trim() === new String(id).trim());
      // console.log(index, id);

      // invoke remove post API

      this.store.dispatch(new PostActions.RemovePost(index));
    });
  }

  likeUnlike(idx: number, pid: any) {
    this.posts.pipe(first()).subscribe(result => {
      console.log(result);
      const index = result.findIndex(objInItems => new String(objInItems.post['_id']).trim() === new String(pid).trim());
      const currentPost = result[index].post;
      let poss = JSON.stringify(currentPost);
      poss = JSON.parse(poss);

      const likeIndex = poss['likes'].findIndex(objInItems => new String(objInItems).trim() === new String(pid).trim());

      if (likeIndex < 0) {
        if (poss['likes'] === undefined) {
          poss['likes'] = [pid];
        } else {
          poss['likes'].push(pid);
        }
        this.store.dispatch(new PostActions.AddLike(idx, {post: poss}));
        // add like to DB
      }
      else {
        if (poss['likes'].length === 1) {
          poss['likes'] = [];
        } else {
          poss['likes'].splice(likeIndex, 1);
        }
        this.store.dispatch(new PostActions.RemoveLike(idx, {post: poss}));

        // remove like from DB
      }
    });
  }


  AddComment(idx: number, pid: any, event: any) {
    const text = event.target.value;

    if(event.key == 'Enter') {
      console.log(event.key);
      this.posts.pipe(first()).subscribe(result => {
        const index = result.findIndex(objInItems => new String(objInItems.post['_id']).trim() === new String(pid).trim());
        const currentPost = result[index].post;
        let poss = JSON.stringify(currentPost);
        poss = JSON.parse(poss);

        // const likeIndex = poss['comments'].findIndex(objInItems => new String(objInItems).trim() === new String(pid).trim());

        const bodyRequest = {};

        const comment = {
          text: text,
          userid: {
            username: 'ANA',
            _id: this.userId
          }
        };

        if (poss['comments'] === undefined) {
          poss['comments'] = [comment];
        } else {
          poss['comments'].push(comment);
        }

        this.store.dispatch(new PostActions.AddComment(idx, {post: poss}));
      });
    }
    //   this.http.post('http://127.0.0.1:3000/add-comment/',
    //     bodyRequest)
    //     .subscribe(data => {
    //       const post = data['comment'];
    //       if (poss['comments'] === undefined) {
    //         poss['comments'] = [post];
    //       } else {
    //         poss['comments'].push(post);
    //       }
    //       this.store.dispatch(new PostActions.AddLike(idx, {post: poss}));
    //       },
    //       error => {
    //         console.log(error);
    //       });
    // });
  }

  loadMorePosts() {
    this.skip += this.limit;
    this.loadPosts();
  }

  loadPosts() {
    this.http.get('http://127.0.0.1:3000/get-posts/5e8bcb6c258256022cac8a0c&' + this.skip + '&' + this.limit)
      .subscribe(data => {
          for (const post of data['posts']) {
            this.store.dispatch(new PostActions.AddPost({
              post
            }));
            console.log(this.posts);
          }
        },
        error => {
          console.log(error);
        });
  }
}
