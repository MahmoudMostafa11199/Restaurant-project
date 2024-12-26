import { blogPosts } from '../../app/blog/data';

export const getBlog = function (id) {
  return blogPosts.find((post) => post.id === parseInt(id));
};
