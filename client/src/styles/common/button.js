import styled, { css } from 'styled-components';

import theme from '../theme';

export const Button = styled.a`
  margin-top: 6em 1em;
  background: transparent;
  color: black;
  cursor: pointer;
  opacity: 0.5;
  ${props =>
    props.border &&
    css`
      border: 2px solid ${theme.redapp};
      border-radius: 10px;
    `}
  ${props =>
    props.about &&
    css`
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-right: 20px;
      padding: 0.7em 0.75em;
    `};
  ${props =>
    props.signup &&
    css`
        padding: 0.70em 1.5em;
        position: relative;
        margin-right: 10px;
    `}
  ${props =>
    props.register &&
    css`
        padding: 0.70em 1.5em;
        position: relative;
        margin-right: 20px;
    }) */
    `}
    &:hover {
    color: ${theme.infomation};
    border-color: ${theme.maroonapp};
    transition: all 1s ease 0s;
  }
`;