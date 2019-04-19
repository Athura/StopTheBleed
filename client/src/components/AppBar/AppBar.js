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
            <Button underline  about>Home</Button>
            <Button underline about>About</Button>
            <Button border about>Login</Button>
          </div>
        </MainNav>
      </StyledRow>
    );
  }
}

export default AppBar;
