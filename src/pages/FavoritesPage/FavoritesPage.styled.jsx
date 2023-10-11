import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-top: 500px;
// `;

// export const Title = styled.h1`
//   color: #000000;
// `;

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-top: 500px;
// `;

// export const Title = styled.h1`
//   margin: 0;
//   margin-right: 10px;
//   color: #ffffff;
//   text-shadow:
//     0 0 5px #00baff,
//     0 0 10px #00baff,
//     0 0 20px #00baff,
//     0 0 40px #00baff,
//     0 0 80px #00baff;
// `;
// export const StyledImage = styled.img`
//   width: 40px;
//   height: 40px;
//   object-fit: cover;
// `;

export const Container = styled.div`
  /* position: relative; */
  /* overflow-x: hidden; */
  height: 100vh;
  /* &::-webkit-scrollbar { */
  /* display: none; */
  /* } */
  margin: 0;
  min-width: 320px;
  max-width: 374px; /* Максимальная ширина для отзывчивости (320px - 375px) */
  margin: 0 auto;
  width: 100%; /* Занимать всю доступную ширину на экранах меньше 375px */

  @media screen and (min-width: 375px) {
    /* Ширина для экранов от 376px до 767px */
    width: 375px; /* Адаптивная ширина */
  }

  @media screen and (min-width: 768px) {
    /* Ширина для экранов от 768px до 1439px */
    margin: 0;
    min-width: 704px; /* Адаптивная ширина */
  }

  @media screen and (min-width: 1440px) {
    /* Ширина для экранов 1440px и более */
    max-width: 1440px; /* Максимальная ширина */
    width: 100%; /* Занимать всю доступную ширину */
  }
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 29px;
  margin-bottom: 100px;
`;

export const Items = styled.li`
  position: relative;
  width: 274px;
  height: 426px;
  text-align: center;
`;

export const WrapperInfo = styled.div`
  margin-top: 14px;
  margin-bottom: 28px;
`;

export const InfoText = styled.p`
  display: flex;
  justify-content: space-around;
  margin-top: 8px;
  font-family: 'Manrope';
  font-size: 12px;
  font-weight: 400;
  line-height: 0, 7;
  font-style: normal;
  color: #12141780 50%;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 16px;
  right: 15px;
  background-color: transparent;
  border: none;
`;

export const LoadButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  border: none;
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 0, 7;
  font-style: normal;
  color: #3470ff;
  text-decoration: underline;
`;

export const CardButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 274px;
  height: 44px;
  background-color: #3470ff;
  border-radius: 12px;
  padding: 12px;
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 600;
  line-height: 0, 7;
  font-style: normal;
  color: #ffffff;
`;

export const MessadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: auto;
  align-items: center;
  margin-top: 50px;
`;

export const Messadge = styled.p`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const StyleLink = styled(Link)`
  font-size: 30px;
  font-weight: bold;
`;
