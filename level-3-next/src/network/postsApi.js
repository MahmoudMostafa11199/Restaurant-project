import { createAsyncThunk } from '@reduxjs/toolkit';

import { posts } from '../app/blog/data';

// Fetch Posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  if (!posts.length) {
    throw new Error('No posts to fetch');
  }
  return posts;
});

// Get Post
export const getPost = createAsyncThunk('posts/getPost', async (postId) => {
  const post = posts.find((post) => post.id === +postId);

  if (!post) {
    // throw new Error(`Post with id ${postId} not found`);
  }

  return post;
});
