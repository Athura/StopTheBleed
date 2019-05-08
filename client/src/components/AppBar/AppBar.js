import React, { Component } from 'react';
import { StyledRow, MainNav, StyledTitle } from '../../styles/component/appbar';
import { Button } from '../../styles/common/button';

class AppBar extends Component {
  render() {
    return (
      <StyledRow>
        <MainNav>
          <StyledTitle>Stop The Bleed</StyledTitle>
          <div>
            <Button underline  upper>Home</Button>
            <Button underline upper>About</Button>
            <Button border upper>Login</Button>
            <Button border upper>Register</Button>
          </div>
        </MainNav>
      </StyledRow>
    );
  }
}

export default AppBar;
