// Section 1
import { Action } from '@ngrx/store';
import { Post } from '../../models/post.model';

// Section 2
export const ADD_POST       = '[POST] Add';
export const LIST_POSTS    = '[POST] List';

// Section 3
export class AddPost implements Action {
  readonly type = ADD_POST

  constructor(public payload: Post) {}
}

export class ListPosts implements Action {
  readonly type = LIST_POSTS;

  constructor(public payload: Post[]) {}
}

// Section 4
export type Actions = ListPosts | AddPost;
