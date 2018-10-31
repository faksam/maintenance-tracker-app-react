import axios from 'axios';
import Cookie from 'cookies-js';
import jwt from 'jwt-simple';
import toastr from 'toastr';

import * as types from '../actions/types';
import config from '../../config';

export const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  user
});

const signUpAction = userDetails => (dispatch) => {
  const user = { user: userDetails };
  return axios.post(`${config.apiUrl}auth/signup`, userDetails)
    .then((response) => {
      const { token } = response.data;
      dispatch(setCurrentUser(jwt.decode(token, 'LifeIsARaceBeLikeWaterMakingItsWayThroughAllObjects')));
      Cookie.set('jwtToken', token);
    })
    .catch((error) => {
      // dispatch(setCurrentUserError(error.response.data));
    });
};

export default signUpAction;
