import { Post } from '../../models/post.model';

export interface PostState {
  readonly posts: Post[];
}
