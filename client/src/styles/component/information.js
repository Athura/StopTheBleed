import styled, { css } from 'styled-components';
import theme from '../theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 40vh;
  position: relative;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;

  background-color: ${theme.background};
  padding: 50px 20px;
`;

export const Padding = styled.div`
  padding: 40px 40px;
`;

export const Header = styled.h1`
  font-size: 50px;
  padding-bottom: 20px;
`;

export const Paragraph = styled.p`
font-size: 18px;
  padding-bottom: 20px;
`;

export const Half = styled.div`
  width: 50%;

  ${props =>
    props.left &&
    css`
      align-self: center;

      &:nth-child(even) {
        text-align: left;
        align-items: flex-start;
      }
    `};

  ${props => props.right && css``};
`;

export const Image = styled.img`
  width: 70%;
  height: 300px;

  &:nth-child(even) {
    right: auto;
    left: -7.5px;
  }
`;

export const Background = styled.div`
position: absolute;
  z-index: -1;
  height: 30px;
  width: 30px;
  background-color: ${theme.greyapp};
  clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
`;