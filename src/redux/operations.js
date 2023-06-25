import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'service/api';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/fetchBaseCurrency',
  async (crd, thunkAPI) => {
    try {
      const { results } = await getUserInfo(crd);
      return results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
