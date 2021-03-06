import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import colors from './styles/color';

import App from './App';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root');

const render = () => {
    ReactDOM.render(
        <ThemeProvider theme={colors}>
            <App />
        </ThemeProvider>,
        rootEl
    );
};

if (module.hot) {
    module.hot.accept('./App', () => {
        setTimeout(render);
    });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
