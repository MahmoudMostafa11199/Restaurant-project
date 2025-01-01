import { createAsyncThunk } from '@reduxjs/toolkit';
import { articlesData } from '../app/data';

// Fetch Articles
export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async () => {
    if (!articlesData.length) {
      throw new Error('Articles not found');
    }

    return articlesData;
  }
);
