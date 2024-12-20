import { blogPosts } from '../data/blogPosts';

export const getBlog = function (id) {
  return blogPosts.find((post) => post.id === parseInt(id));
};
