import { createSlice } from '@reduxjs/toolkit';

import { fetchArticles } from '../../network/articleApi';

export const articles = createSlice({
  name: 'articles',

  initialState: {
    articles: [],
    error: '',
    loading: false,
  },

  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.loading = false;
        state.error = '';
      });
  },
});

export { fetchArticles };

export default articles.reducer;
