
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/postsSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export type AppDispatch = typeof store.dispatch; 
