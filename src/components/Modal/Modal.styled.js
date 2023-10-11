import styled from '@emotion/styled';
import { AiOutlineClose } from 'react-icons/ai';
// import { colors } from 'utils';
// import { ButtonStyled } from 'components/Buttons/Button.styles';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(18, 20, 23, 0.5);
  z-index: 100;
`;

export const ModalWindow = styled.div`
  position: relative;
  overflow: auto;
  width: 561px;
  max-height: 752px;
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: block;
  height: 30px;
  width: 30px;
  right: 10px;
  z-index: 1;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Icon = styled(AiOutlineClose)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: color 200ms linear;
  width: 16px;
  height: 16px;
  :hover {
    color: #3470ff;
  }
`;

export const Img = styled.img`
  width: 469px;
  height: 248px;
  margin-bottom: 14px;
  margin: 0 auto 14px;
  border-radius: 14px;
  object-fit: cover;
`;

export const Description = styled.p`
  color: #121417;
  line-height: 142.857%;
  margin-bottom: 24px;
`;

export const Title = styled.p`
  color: #121417;
  line-height: 142.857%;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  /* width: 461px; */
  margin-bottom: 24px;
`;

export const Card = styled.li`
  display: inline-block;
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;

  color: #121417;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.24px;

  & > span {
    font-weight: 600;
    color: #3470ff;
  }
`;

export const MainInfo = styled.p`
  color: #121417;
  font-size: ${(props) => props.fs}px;
  font-weight: 500;
  line-height: 150%;

  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;

export const Highlight = styled.span`
  color: #3470ff;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  margin-bottom: ${(props) => props.mb}px;
  max-height: 39px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 160%;

  & > li {
    position: relative;
    &:not(:last-child) {
      margin-right: 12px;
    }
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      display: block;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
      height: 16px;
      top: 2px;
      right: -6px;
    }
  }
`;

export const ButtonStyled = styled.button`
  color: #ffffff;
  font-weight: 600;
  line-height: 142.857%;

  background: #3470ff;
  padding: ${(props) => props.padding};
  border-radius: 12px;
  border: none;

  font-size: 14px;
  font-weight: 600;
  line-height: 142.857%;

  transition: background 350ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const Button = ButtonStyled.withComponent('a');
