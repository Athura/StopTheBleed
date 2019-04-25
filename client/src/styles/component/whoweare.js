import styled from "styled-components";
import theme from '../theme';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`;

export const SectionCard = styled.div`
  transition: 0.7s;
  width: 20%;
  margin-right: 50px;
`;

export const Header = styled.h3`
  font-size: 25px;
  color: ${theme.redapp};
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-family: 'Poppins';
`;

export const SectionHeader = styled.h1`
  font-weight: bold;
  font-size: 40px;
`;
