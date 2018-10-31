import axios from 'axios';
import Cookie from 'cookies-js';
import jwt from 'jwt-simple';

import * as types from './types';
import config from '../../config';

export const signOutUser = (event) => {
  if (event.target.textContent !== 'Sign out') return;
  localStorage.clear();
  return {
    type: types.UNSET_CURRENT_USER,
    user: {}
  };
};

export const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  user
});

export const setCurrentUserError = error => ({
  type: types.SET_CURRENT_USER_ERROR,
  error
});

const signInAction = userDetails => dispatch => axios.post(
  `${config.apiUrl}auth/login`, userDetails
)
  .then((response) => {
    const { token } = response.data;
    dispatch(setCurrentUser(jwt.decode(token,
      'LifeIsARaceBeLikeWaterMakingItsWayThroughAllObjects')));
    Cookie.set('jwtToken', token);
  })
  .catch((error) => {
    dispatch(setCurrentUserError(error.response.data.error));
  });

export default signInAction;
