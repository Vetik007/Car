import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6520030b906e276284c3e4bb.mockapi.io/api/v1/';

export const getCarList = createAsyncThunk(
  'adverts/CarList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
