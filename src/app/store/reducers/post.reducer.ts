import { Action } from '@ngrx/store';
import { Post } from '../../models/post.model';
import * as PostActions from '../../store/actions/post.actions';

// Section 1
const initialState: Post = {
  username: null,
  text: null,
  imgUrl: null
}

// Section 2
export function postsReducer(state: Post[] = [initialState], action: PostActions.Actions) {

  // Section 3
  switch (action.type) {
    case PostActions.LIST_POSTS:
      return initialState;
    case PostActions.ADD_POST:
      return [state, action.payload];
    default:
      return initialState;
  }
}
