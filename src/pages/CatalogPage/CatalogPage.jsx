import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { getCarList } from '../../redux/operation';
import { ReactComponent as FavoriteButtonIcon } from '../../Img/FavoriteButtonIcon.svg';
import { ReactComponent as FavoriteButtonBlueIcon } from '../../Img/FavoriteButtonBlueIcon.svg';
import Modal from '../../components/Modal/Modal';

import { toggleFavorite } from '../../redux/carSlice';
import defaultImg from '../../Img/defolt.jpg';

import {
  Container,
  Items,
  // Title,
  List,
  InfoText,
  WrapperInfo,
  FavoriteButton,
  LoadButton,
  CardButton,
  Images,
} from './CatalogPage.styled';

const CatalogPage = () => {
  const [imageLoadError, setImageLoadError] = useState(false);
  const favoriteIds = useSelector((state) => state.car.isFavorites);

  const dispatch = useDispatch();
  const carList = useSelector((state) => state.car.carData);
  const [displayedItems, setDisplayedItems] = useState(8);

  const [isModalOpen, setIsModalOpen] = useState(
    new Array(carList.length).fill(false),
  );
  const toggleOpen = (index) => {
    const newIsModalOpen = [...isModalOpen];
    newIsModalOpen[index] = !newIsModalOpen[index];
    setIsModalOpen(newIsModalOpen);
  };

useEffect(() => {
    dispatch(getCarList());

    // Loading data from local storage when the page is loaded
    const savedFavorites = JSON.parse(
      localStorage.getItem('isFavorites') || '[]',
    );

    if (savedFavorites.length > 0) {
      savedFavorites.forEach((carId) => {
        dispatch(toggleFavorite(carId));
      });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('isFavorites', JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  useEffect(() => {
    dispatch(getCarList());
  }, [dispatch]);
      
  return (
    <Container className="container">
      <List className="list">
        {carList && carList.length > 0 ? (
          carList.slice(0, displayedItems).map((car, index) => (
            <Items className="blok" key={nanoid()}>
              <Images
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
              >
                {!favoriteIds.includes(car.id) ? (
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
              {/* <CardButton type="button" onClick={toggleOpen}> */}
              <CardButton type="button" onClick={() => toggleOpen(index)}>
                Learn more
              </CardButton>
              {/* {isModalOpen && <Modal toggleOpen={toggleOpen} data={car} />} */}
              {isModalOpen[index] && (
                <Modal toggleOpen={() => toggleOpen(index)} data={car} />
              )}
            </Items>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </List>

      {displayedItems < (carList ? carList.length : 0) && (
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

export default CatalogPage;
