import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { ReactComponent as FavoriteButtonIcon } from '../../Img/FavoriteButtonIcon.svg';
// import { selectFavoriteCars } from '../../redux/selector/selectCarListData';
import { ReactComponent as FavoriteButtonBlueIcon } from '../../Img/FavoriteButtonBlueIcon.svg';
import Modal from '../../components/Modal/Modal';

import { getCarList } from '../../redux/operation';

import defaultImg from '../../Img/defolt.jpg';

import {
  Container,
  Items,
  List,
  InfoText,
  WrapperInfo,
  FavoriteButton,
  LoadButton,
  CardButton,
} from './FavoritesPage.styled';
import { useEffect, useState } from 'react';

const FavoritesPage = () => {
  const [savedFavorites, setSavedFavorites] = useState(
    JSON.parse(localStorage.getItem('isFavorites')) || [],
  );

  const filteredCars = useSelector((state) =>
    state.car.carData.filter((car) => savedFavorites.includes(car.id)),
  );
  // console.log('filteredCars', filteredCars);

  const [imageLoadError, setImageLoadError] = useState(false);

  const [displayedItems, setDisplayedItems] = useState(8);
  const dispatch = useDispatch();

  const toggleFavoriteCar = (carId) => {
    // Checking if the car is in the favorites list
    const isFavorite = savedFavorites.includes(carId);

    // If the car is on the list, delete it
    if (isFavorite) {
      const updatedFavorites = savedFavorites.filter((id) => id !== carId);
      setSavedFavorites(updatedFavorites);

      // Updating the list of favorite cars in the local storage
      localStorage.setItem('isFavorites', JSON.stringify(updatedFavorites));
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(
    new Array(filteredCars.length).fill(false),
  );

  const toggleOpen = (index) => {
    const newIsModalOpen = [...isModalOpen];
    newIsModalOpen[index] = !newIsModalOpen[index];
    setIsModalOpen(newIsModalOpen);
  };

  useEffect(() => {
    dispatch(getCarList());
  }, [dispatch]);

  return (
    <Container className="container">
      <List className="list">
        {filteredCars && filteredCars.length > 0 ? (
          filteredCars.slice(0, displayedItems).map((car, index) => (
            <Items className="blok" key={nanoid()}>
              <img
                src={!imageLoadError ? car.img : defaultImg}
                // src={car.img}
                alt={car.make}
                width={274}
                height={268}
                onError={() => {
                  setImageLoadError(true);
                }}
              />
              <FavoriteButton
                type="button"
                onClick={() => toggleFavoriteCar(car.id)}
                // isFavorite={!favoriteIds.includes(car.id)}
              >
                {!savedFavorites.includes(car.id) ? (
                  <FavoriteButtonIcon width="16" height="16" />
                ) : (
                  <FavoriteButtonBlueIcon width="16" height="16" />
                )}
              </FavoriteButton>
              <WrapperInfo>
                <h3>
                  <span>{car.make}</span> <span>{car.model}</span>
                  <span>{car.year}</span>
                  {car.rentalPrice}
                </h3>
                <InfoText>
                  <span>{car.address.split(', ')[1]}</span> |
                  <span>{car.address.split(', ')[2]}</span> |
                  <span>{car.rentalCompany}</span>
                </InfoText>

                <InfoText>
                  <span>{car.type}</span> | <span>{car.model}</span> |
                  <span>{car.id}</span> |
                  <span>
                    {car.functionalities[0].split(' ').slice(0, 2).join(' ')}
                  </span>
                </InfoText>
              </WrapperInfo>
              {/* <CardButton type="button" onClick[()=> toggleOpen(index)]> */}
              <CardButton type="button" onClick={() => toggleOpen(index)}>
                Learn more
              </CardButton>
              {isModalOpen[index] && (
                <Modal toggleOpen={() => toggleOpen(index)} data={car} />
              )}
              {/* {isModalOpen && (
                <Modal toggleOpen={toggleOpen(index)} data={car} />
              )} */}
            </Items>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </List>

      {displayedItems < (filteredCars ? filteredCars.length : 0) && (
        <LoadButton
          type="button"
          onClick={() => setDisplayedItems((prev) => prev + 8)}
        >
          Load more
        </LoadButton>
      )}
    </Container>
  );
};

export default FavoritesPage;
