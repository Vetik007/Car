import styled from '@emotion/styled';

export const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* padding-top: 500px; */
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const Title = styled.h1`
  display: block;
  /* margin: 0; */

  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;
export const StyledImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  display: flex;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
`;

export const InfoText = styled.p`
  font-size: 24px;
  color: blue;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;
