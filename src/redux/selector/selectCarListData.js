import { createSelector } from 'reselect';

const selectCarListData = (state) => state.car.carData;
export const getIdFavorites = (state) => state.car.isFavorites;

export const selectFavoriteCars = createSelector(
  [selectCarListData, getIdFavorites],
  (cars, favoriteIds) => {
    return cars.filter((car) => favoriteIds.includes(car.id));
  },
);
