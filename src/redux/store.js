import { configureStore } from '@reduxjs/toolkit';
import { carReduser } from './carSlice';

const store = configureStore({
  reducer: {
    car: carReduser,
  },
});

export default store;
