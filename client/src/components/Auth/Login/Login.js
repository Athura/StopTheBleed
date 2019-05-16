import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../../actions/auth';

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}

export default Login
