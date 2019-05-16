import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../../../actions/auth';

import Input from '../../Form/Input';
import Select from '../../Form/Select';
import { Button } from '../../../styles/common/button';
import { StyledError } from '../../../styles/common/error';

const Register = ({ registerUser, isAuthenticated, errors }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    userType: '',
    errors: {}
  });

  const { name, email, password, password2, userType } = formData;

  const userOptions = ['teacher', 'student'];

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
      registerUser({ name, email, password, userType });
  }

  if (isAuthenticated) {
    // This will change to dashboard when that component is implemented
    return <Redirect to="/" />
  }

  return (
    <Fragment>
      <h1>Register</h1>
      <p>
        <i className="fas fa-user" /> Create Your Account
      </p>
      <div>
        <Input
          type="text"
          label="Name"
          title="name"
          name="name"
          value={name}
          placeholder="Enter your name here"
          onChange={e => onChange(e)}
        />
        {errors.name && <StyledError>{errors.name}</StyledError>}
        <Input
          type="email"
          label="Email"
          title="email"
          name="email"
          value={email}
          placeholder="Enter your email here"
          onChange={e => onChange(e)}
        />
        {errors.email && <StyledError>{errors.email}</StyledError>}
        <Select
          name="userType"
          title="User Type"
          placeholder="Please select which kind of user you are"
          options={userOptions}
          value={userType}
          onChange={e => onChange(e)}
        />
        {errors.userType && <StyledError>{errors.userType}</StyledError>}
        <Input
          type="password"
          label="Password"
          title="password"
          name="password"
          value={password}
          placeholder="Enter a password here"
          onChange={e => onChange(e)}
        />
        {errors.password && <StyledError>{errors.password}</StyledError>}
        <Input
          type="password"
          label="Confirm Your Password"
          title="Password Confirmation"
          name="password2"
          value={password2}
          placeholder="Confirm your password here"
          onChange={e => onChange(e)}
        />
        {errors.password2 && <StyledError>{errors.password2}</StyledError>}
        <Button register border onClick={onSubmit}>
          Register
        </Button>
      </div>
    </Fragment>
  )
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.error
})

export default connect(mapStateToProps, { registerUser })(Register);