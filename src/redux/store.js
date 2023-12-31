import { configureStore } from '@reduxjs/toolkit';
import { slice } from 'redux/slice';

export const store = configureStore({
  reducer: {
    currency: slice.reducer,
  },
});
