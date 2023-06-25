import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency } from './operations';
export const slice = createSlice({
  name: 'rates',
  initialState: {
    baseCurrency: '',
  },
  extraReducers: {
    [fetchBaseCurrency.fulfilled](state, action) {
      state.baseCurrency = action.payload;
    },
  },
});
