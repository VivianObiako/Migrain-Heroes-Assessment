
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import apiSlice from './apiSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    api: apiSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
