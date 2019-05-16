import React, { Component } from 'react';
import { StyledRow, MainNav, StyledTitle } from '../../styles/component/appbar';
import { Button } from '../../styles/common/button';
import { Link } from 'react-router-dom';

class AppBar extends Component {
  render() {
    return (
      <StyledRow>
        <MainNav>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <StyledTitle>Stop The Bleed</StyledTitle>
          </Link>
          <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button underline  upper>Home</Button>
            </Link>
            <Button underline upper>About</Button>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button border upper>Login</Button>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button border upper>Register</Button>
            </Link>
          </div>
        </MainNav>
      </StyledRow>
    );
  }
}

export default AppBar;
