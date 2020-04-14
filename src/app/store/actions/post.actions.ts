// Section 1
import { Action } from '@ngrx/store';
import { Post } from '../../models/post.model';

// Section 2
export const ADD_POST       = '[POST] Add';
export const LIST_POSTS    = '[POST] List';
export const REMOVE_POST    = '[POST] Remove';
export const ADD_LIKE    = '[POST] Like';
export const REMOVE_LIKE    = '[POST] DisLike';
export const ADD_COMMENT    = '[POST] Comment';

// Section 3
export class AddPost implements Action {
  readonly type = ADD_POST;

  constructor(public payload: any) {}
}

export class ListPosts implements Action {
  readonly type = LIST_POSTS;

  constructor(public payload: Post[]) {}
}

export class RemovePost implements Action {
  readonly type = REMOVE_POST;

  constructor(public payload: number) {}
}

export class AddLike implements Action {
  readonly type = ADD_LIKE;

  constructor(public idx: number, public pid: any) {}
}

export class RemoveLike implements Action {
  readonly type = REMOVE_LIKE;

  constructor(public idx: number, public pid: any) {}
}

export class AddComment implements Action {
  readonly type = ADD_COMMENT;

  constructor(public idx: number, public post: any) {}
}

// Section 4
export type Actions = ListPosts | AddPost | RemovePost | AddComment | AddLike | RemoveLike;
