import { createSlice } from '@reduxjs/toolkit';
import { getCarList } from './operation';
import isEqual from 'lodash/isEqual';

const initialState = {
  carData: [],
  isLoading: false,
  error: null,
  isFavorites: [],
};

const carSlice = createSlice({
  name: 'adverts',
  initialState: initialState,

  reducers: {
    toggleFavorite(state, action) {
      if (state.isFavorites.includes(action.payload)) {
        state.isFavorites = state.isFavorites.filter(
          (id) => id !== action.payload,
        );
      } else {
        state.isFavorites.push(action.payload);
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCarList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCarList.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.carData = action.payload;
        state.error = null;
        if (!isEqual(state.carData, action.payload)) {
          state.carData.push(...action.payload);
        }
      })
      .addCase(getCarList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { toggleFavorite } = carSlice.actions;

export const carReduser = carSlice.reducer;
