import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {PostState} from '../../store/states/post.state';
import {HttpClient} from '@angular/common/http';
import * as PostActions from '../../store/actions/post.actions';
import {Observable} from 'rxjs';
import {Post} from '../../models/post.model';
import {first} from 'rxjs/operators';
import io from 'socket.io-client';
import {SharedDataService} from "../../services/sharedData.service";


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
  userName = null;
  postText = null;
  postNotify = false;
  postImg = null;
  errMsg = '';
  socket;

  constructor(private store: Store<PostState>, private http: HttpClient, private sharedDataService: SharedDataService) {
    this.posts = store.select('posts');
  }

  ngOnInit(): void {
    this.skip = 0;
    this.limit = 20;

    this.userId = '5e8bcb8fcec44089e8c21178';

    this.userName = 'Pandaa'

    this.sharedDataService.setsShowNotification(false);

    this.loadPosts();

    this.socketConnect();
    this.updateNotifications();
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
      // const index = result.findIndex(objInItems => new String(objInItems.post['_id']).trim() === new String(id).trim());
      // console.log(index, id);

    this.http.post('http://127.0.0.1:3000/post/remove', {id})
      .subscribe(data => {
        console.log(data);
        this.delIdx = null;
        },
        error => {
          console.log(error);
        });

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

      console.log(poss['likes']);

      // let likeIndex = poss['likes'].findIndex(objInItems => new String(objInItems).trim() === new String(this.userId).trim());
      // if (likeIndex < 0) {
        const likeIndex = poss['likes'].findIndex((objInItems) => {
          console.log(objInItems);
          if (objInItems.hasOwnProperty('userid')) {
            return new String(objInItems.userid._id).trim() === new String(this.userId).trim();
          } else {
            return new String(objInItems).trim() === new String(this.userId).trim();
          }
        });
      // }
      console.log(likeIndex)
      if (likeIndex < 0) {
        if (poss['likes'] === undefined) {
          poss['likes'] = [this.userId];
        } else {
          poss['likes'].push(this.userId);
        }
        this.store.dispatch(new PostActions.AddLike(idx, {post: poss}));
        // add like to DB

        this.http.post('http://127.0.0.1:3000/likes/like', {userid: this.userId, postid: pid})
          .subscribe(data => {
              console.log(data);
              this.delIdx = null;
            },
            error => {
              console.log(error);
            });
      }
      else {
        if (poss['likes'].length === 1) {
          poss['likes'] = [];
        } else {
          poss['likes'].splice(likeIndex, 1);
        }
        this.store.dispatch(new PostActions.RemoveLike(idx, {post: poss}));

        // remove like from DB
        this.http.post('http://127.0.0.1:3000/likes/dislike', {userid: this.userId, postid: pid})
          .subscribe(data => {
              console.log(data);
              this.delIdx = null;
            },
            error => {
              console.log(error);
            });
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

        const bodyRequest = {postid: pid, userid: this.userId, text: text};

        const comment = {
          text: text,
          userid: {
            username: this.userName,
            _id: this.userId
          }
        };

        if (poss['comments'] === undefined) {
          poss['comments'] = [comment];
        } else {
          poss['comments'].push(comment);
        }

        this.http.post('http://127.0.0.1:3000/comments/create-comment', bodyRequest)
          .subscribe(data => {
              console.log(data);
              this.delIdx = null;
            },
            error => {
              console.log(error);
            });

        this.store.dispatch(new PostActions.AddComment(idx, {post: poss}));
      });
    }
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
          }
        },
        error => {
          console.log(error);
        });
  }

  addPost() {
    if (this.postText === null && this.postImg === null) {
      this.errMsg = 'You should choose an image or write something!';
      return;
    }

    console.log('inside')

    let fd = new FormData();
    if (this.postImg !== null) {
      fd.append('image', this.postImg);
    }
    if (this.postText !== null) {
      fd.append('text', this.postText);
    }

    // console.log(this.postText);
    // console.log(this.postImg);

    fd.append('notifyusers', this.postNotify + '');
    fd.append('userid', '5e8bcb6c258256022cac8a0c');

    // console.log('inside 2')

    this.http.post('http://127.0.0.1:3000/post/create-post', fd)
      .subscribe(data => {
        console.log(data);
        let post = data['post'];
        post['likes'] = [];
        post['comments'] = [];

        this.store.dispatch(new PostActions.AddPostFirst({
            post: post
          }));
        this.errMsg = null;

        this.sendNotification();

        },
        error => {
          console.log(error);
        });
    console.log('outside')
  }

  imageSelected(event: Event) {
    this.postImg = event.target['files'][0];
  }

  sendNotification() {

    this.socket.emit('getMsg', {
      from: '5e8bcb6c258256022cac8a0c',
      toid : ['5e8bcb6c258256022cac8a0c', '5e8bcb8fcec44089e8c21178'],
      msg : 'user have new post',
      name : 'PANDA MAIN'
    });
    console.log('message emitted');
  }

  private socketConnect() {
    this.socket = io('http://localhost:3000', {
      transports: ['websocket']
    });

    this.socket.emit('username', this.userId);
    this.socket.emit('username', '5e8bcb6c258256022cac8a0c');
  }

  private updateNotifications() {
    this.socket.on('sendMsg', (data) => {
      console.log('message recieved', data);
      this.sharedDataService.setsShowNotification(true);
    });
  }
}
