import { Action } from '@ngrx/store';
import { Post } from '../../models/post.model';
import * as PostActions from '../../store/actions/post.actions';

// Section 1
const initialState: Post = {
  post: {text: 'test'}
};

// Section 2
export function postsReducer(state: Post[] = [initialState], action: PostActions.Actions) {

  let idx = -1;
  // Section 3
  switch (action.type) {
    case PostActions.LIST_POSTS:
      return state;
    case PostActions.ADD_POST:
      return [...state, action.payload];
    case PostActions.ADD_FIRST:
      return [action.post, ...state];
    case PostActions.REMOVE_POST:
      idx = action.payload;
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    case PostActions.ADD_LIKE:
      idx = action.idx;
      return [...state.slice(0, idx),
        action.pid,
        ...state.slice(idx + 1)];
    case PostActions.REMOVE_LIKE:
      idx = action.idx;
      return [...state.slice(0, idx),
        action.pid,
        ...state.slice(idx + 1)];
    case PostActions.ADD_COMMENT:
      idx = action.idx;
      return [...state.slice(0, idx),
        action.post,
        ...state.slice(idx + 1)];
    default:
      return state;
  }
}
