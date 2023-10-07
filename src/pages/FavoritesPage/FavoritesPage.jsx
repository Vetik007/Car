import { Title, Container, StyledImage } from './FavoritesPage.styled';

// const FavoritesPage = () => {
//   return (
//     <Container>
//       <Title>Favorites Page</Title>
//     </Container>
//   );
// };

// export default FavoritesPage;

import example from '../../assets/example.png';

const FavoritesPage = () => {
  return (
    <Container>
      <Title>Favorites Page</Title>
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default FavoritesPage;
