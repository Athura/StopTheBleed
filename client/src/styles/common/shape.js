import styled, { css } from 'styled-components';
import theme from '../theme';

export const Circle = styled.div`
    border: 2px solid ${theme.greycooler};
    border-radius: 50%;
    z-index: 86;

    ${props => props.small && css`
        width: 75px;
        height: 75px;
    `};

    ${props => props.large && css`
        width: 100px;
        height: 100px;
    `};
`;

export const Square = styled.div`
    border: 2px solid ${theme.greycooler};
    border-radius: 5px;
    z-index: 86;

    ${props => props.small && css`
        width: 75px;
        height: 75px;
    `};

    ${props => props.large && css`
        width: 100px;
        height: 100px;
    `};
`;