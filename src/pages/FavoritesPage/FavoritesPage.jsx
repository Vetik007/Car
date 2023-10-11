import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { ReactComponent as FavoriteButtonIcon } from '../../Img/FavoriteButtonIcon.svg';
// import { selectFavoriteCars } from '../../redux/selector/selectCarListData';
import { ReactComponent as FavoriteButtonBlueIcon } from '../../Img/FavoriteButtonBlueIcon.svg';
import Modal from '../../components/Modal/Modal';

import { getCarList } from '../../redux/operation';
import { toggleFavorite } from '../../redux/carSlice';
import defaultImg from '../../Img/defolt.jpg';

import {
  Container,
  Items,
  Title,
  List,
  InfoText,
  WrapperInfo,
  FavoriteButton,
  LoadButton,
  CardButton,
} from './FavoritesPage.styled';
import { useEffect, useState } from 'react';

const FavoritesPage = () => {
  const [imageLoadError, setImageLoadError] = useState(false);
  // const allCars = useSelector(selectFavoriteCars);
  // console.log('allCars', allCars);
  const [displayedItems, setDisplayedItems] = useState(8);
  const dispatch = useDispatch();

  const savedFavorites = JSON.parse(localStorage.getItem('isFavorites')) || [];

  // Filtering cars from the Redux state based on saved favorite identifiers
  const filteredCars = useSelector((state) =>
    state.car.carData.filter((car) => savedFavorites.includes(car.id)),
  );
  // console.log('filteredCars', filteredCars);

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
      <Title>Catalog Page</Title>
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
                onClick={() => dispatch(toggleFavorite(car.id))}
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
