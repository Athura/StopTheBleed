import styled, { css } from 'styled-components';

import theme from '../theme';

export const Button = styled.a`
  font-size: 15px;
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
    props.underline &&
    css`
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-right: 20px;
      padding: 0.7em 0.75em;

      display: inline-block;
      position: relative;
      padding-bottom: 3px;

      &:after {
        content: '';
        display: block;
        margin: auto;
        height: 3px;
        width: 0px;
        transition: width 0.5s ease, background-color 0.5s ease;
      }

      &:hover:after {
        width: 100%;
        background: ${theme.redapp};
      }
    `}
    ${props =>
      props.getstarted &&
      css`
      font-size: 20px;
        text-transform: uppercase;
        padding: 0.7em 1.5em;
        margin-top: 10px;
        position: relative;
      `}
  ${props =>
    props.register &&
    css`
        padding: 0.70em 1.5em;
        position: relative;
        margin-right: 20px;
    })
    `}
    &:hover {
    color: ${theme.infomation};
    border-color: ${theme.maroonapp};
    transition: all 1s ease 0s;
  }
`;
