
import createTheme from 'styled-components-theme';
import colors from './color';

// The purpose of this document is to take our colors object from colors and allow our ThemeProvider in index.js to do what it's meant to do providing an easier way to access rgb colors. Styled components is a little weird with rgb and hex colors so this is why we had to boiler plate the heck out of this.

// For the future the steps for boilerplating can be found here: https://github.com/erikras/styled-components-theme
// 1. Define the colors (color)
// 2. Apply the themeprovider in index.js
// 3. Create the exportable theme objects with the style components theme lib (this document)
// 4. Use this object by importing it and using the theme.___ value
// 5. Happiness and simpleness
const theme = createTheme(...Object.keys(colors));
export default theme;