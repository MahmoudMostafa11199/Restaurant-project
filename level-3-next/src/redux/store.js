'use client';

import { configureStore } from '@reduxjs/toolkit';

import postsSlice from '../components/Blog/postsSlice';
import commentsSlice from '../components/Blog/commentsSlice';
import articlesSlice from '../components/Article/articlesSlice';

const store = configureStore({
  reducer: {
    posts: postsSlice,
    comments: commentsSlice,
    articles: articlesSlice,
  },
});

export default store;
