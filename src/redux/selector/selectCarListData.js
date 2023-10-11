import { createSelector } from 'reselect';

const selectFavoriteCars = (state) => state.car.carData;
const selectSavedFavorites = (state) => state.car.isFavorites;

const makeFilteredCars = createSelector(
  [selectFavoriteCars, selectSavedFavorites],
  (carData, savedFavorites) => {
    return carData.filter((car) => savedFavorites.includes(car.id));
  },
);

export default makeFilteredCars;
