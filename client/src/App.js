import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import AppBar from "./components/AppBar/AppBar";
import Landing from "./components/Landing/Landing";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";

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
        <Provider store={store}>
          <Router>
            <GlobalStyles />
            <AppBar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
