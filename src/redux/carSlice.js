import { createSlice } from '@reduxjs/toolkit';
import { getCarList } from './operation';

const initialState = {
  adverts: {
    CarList: {
      data: null,
      loading: 'idle',
      error: null,
    },
  },
};

const carSlice = createSlice({
  name: 'adverts',
  initialState: initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getCarList.pending, (state) => {
        state.adverts.CarList.loading = 'pending';
      })
      .addCase(getCarList.fulfilled, (state, action) => {
        state.adverts.CarList.loading = 'fulfilled';
        state.adverts.CarList.data = action.payload;
        state.adverts.CarList.error = null;
      })
      .addCase(getCarList.rejected, (state, action) => {
        state.adverts.CarList.loading = 'rejected';
        state.adverts.CarList.error = action.error.message;
      });
  },
});

// export const { reducer: carSlice } = carSlice;
export const carReduser = carSlice.reducer;
// export default carRedusers;
