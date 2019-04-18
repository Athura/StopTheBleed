import { css } from 'styled-components';

const sizes = {
  xlarge: 1281,
  large: 981,
  medium: 737,
  small: 481,
  xsmall: 360
};
// https://www.styled-components.com/docs/advanced#media-templates -- this was the inspiration for using this function; use wisely.
// to implement this function in a file use ${media.___``}
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;
