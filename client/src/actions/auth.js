import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_PROFILE,
  LOGOUT
} from './types';
import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const registerUser = ({
  name,
  email,
  password,
  userType
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, email, password, userType });
  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => console.log(error));
    }

    dispatch({
      type: REGISTER_FAILURE
    });
  }
};

export const logoutUser = () => dispatch => {
  dispatch({
    type: CLEAR_PROFILE
  });
  dispatch({
    type: LOGOUT
  });
};
