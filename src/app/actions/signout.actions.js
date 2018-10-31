import Cookie from 'cookies-js/dist/cookies';
import * as types from './types';

export const signoutCurrentUser = () => ({
  type: types.SIGNOUT_USER
});

const signoutUser = () => (dispatch) => {
  Cookie.expire('jwtToken');
  dispatch(signoutCurrentUser({}));
};

export default signoutUser;
