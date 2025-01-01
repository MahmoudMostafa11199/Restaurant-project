import { createAsyncThunk } from '@reduxjs/toolkit';

import { comments } from '../app/blog/data';

// Fetch Comments
export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async () => {
    if (!comments.length) {
      throw new Error(`No comments to fetch`);
    }

    return comments;
  }
);
