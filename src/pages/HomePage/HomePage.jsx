import {
  Container,
  Title,
  InfoBlock,
  InfoWrapper,
  InfoText,
  TitleWrapper,
} from './HomePage.styled';
// import example from '../../assets/example.png';
// import { Images } from '../CatalogPage/CatalogPage.styled';
import homeImg from '../../Img/homeImg.jpg';

const HomePage = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>Welcome to the auto club.</Title>
        <Title>
          Travel in comfort and enjoy an unforgettable travel experience!
        </Title>
      </TitleWrapper>

      <InfoWrapper>
        <img src={homeImg} alt="car rent" width={610} height={420} />
        <InfoBlock>
          <InfoText>Insurance - ALL INCLUSIVE</InfoText>
          <InfoText>No franchise or deposit for the car</InfoText>
          <InfoText>
            Free delivery to your hotel* or skip-the-line pickup at the office
          </InfoText>
          <InfoText>Second driver FREE</InfoText>
          <InfoText>
            Fuel tank &ldquo;full - full&rdquo; (a deposit is taken for a full
            tank)
          </InfoText>
          <InfoText>Payment upon receipt</InfoText>
        </InfoBlock>
      </InfoWrapper>

      {/* <StyledImage src={example} alt="Example" /> */}
    </Container>
  );
};

export default HomePage;
