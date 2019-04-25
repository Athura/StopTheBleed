import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

import AppBar from './components/AppBar/AppBar';
import Landing from './components/Landing/Landing';

class App extends Component {
  render() {
    const GlobalStyles = createGlobalStyle`
      html {
        scroll-behavior: smooth;
      }
      body {
        @import url("https://fonts.googleapis.com/css?family=Karla:400,700");
        @import url("https://fonts.googleapis.com/css?family=Pacifico&amp;subset=cyrillic,latin-ext");
        @import url('https://fonts.googleapis.com/css?family=Lato:300,400,900');
        @import url('https://fonts.googleapis.com/css?family=Poppins:400,700');
        font-family: 'Poppins', 'Pacifico', 'Lato', 'Karla';
      }
    `;

    return (
      <>
        <GlobalStyles />
        <AppBar />
        <Landing />
      </>
    );
  }
}

export default App;
