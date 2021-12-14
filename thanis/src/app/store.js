import { configureStore } from '@reduxjs/toolkit';

import movieReducer from '../features/Movie/movieSlicer';

import userReducer from '../features/User/userSlice';


export const store = configureStore({
  reducer: {
    Movie: movieReducer,
    user:userReducer,

  },
});
