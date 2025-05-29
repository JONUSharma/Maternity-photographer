import { configureStore } from '@reduxjs/toolkit';
import photographerReducer from './PhotoGrapherSlice.jsx';

export const store = configureStore({
  reducer: {
    photographers: photographerReducer,
  },
});
