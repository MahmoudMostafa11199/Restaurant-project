import { createSlice } from '@reduxjs/toolkit';

import { fetchComments } from '../../network/commentApi';

export const comments = createSlice({
  name: 'comments',

  initialState: {
    comments: [],
    error: '',
    loading: false,
  },

  reducer: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
        state.error = '';
      });
  },
});

export { fetchComments };

export default comments.reducer;
