import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { getCarList } from '../../redux/operation';
import { ReactComponent as FavoriteButtonIcon } from '../../Img/FavoriteButtonIcon.svg';

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
} from './CatalogPage.styled';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.car.adverts.CarList.data);
  const [displayedItems, setDisplayedItems] = useState(8);

  useEffect(() => {
    dispatch(getCarList());
  }, [dispatch]);

  return (
    <Container className="container">
      <Title>Catalog Page</Title>
      <List className="list">
        {carList && carList.length > 0 ? (
          carList.slice(0, displayedItems).map((car) => (
            <Items className="blok" key={nanoid()}>
              <img src={car.img} alt={car.make} width={274} height={268} />
              <FavoriteButton type="button">
                <FavoriteButtonIcon width="16" height="16" />
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
                  <span>{car.id}</span> |{' '}
                  <span>
                    {car.functionalities[0].split(' ').slice(0, 2).join(' ')}
                  </span>
                </InfoText>
              </WrapperInfo>
              <CardButton type="button">Learn more</CardButton>
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
