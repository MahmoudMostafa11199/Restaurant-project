import { createSlice } from '@reduxjs/toolkit';

import { fetchPosts, getPost } from '../../network/postsApi';

export const postsSlice = createSlice({
  name: 'posts',

  initialState: {
    posts: [],
    selectedPost: {},
    error: '',
    loading: false,
  },

  reducer: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
        state.error = '';
      })

      .addCase(getPost.pending, (state, action) => {
        state.selectedPost = {};
        state.loading = true;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.selectedPost = action.payload;
        state.loading = false;
        state.error = '';
      });
  },
});

export { fetchPosts, getPost };

export default postsSlice.reducer;
