import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 75vh;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
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
    `};

  ${props => props.right && css``};
`;

export const Image = styled.img`
  width: 100%;
  height: 600px;
`;