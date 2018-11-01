import isEmpty from 'is-empty';
import {
  SET_CURRENT_USER,
  SIGN_UP_ERRORS,
  SET_CURRENT_USER_FAIL,
  SET_CURRENT_USER_ERROR,
  SIGNOUT_USER
} from '../actions/types';


const initialState = {
  isAuthenticated: false,
  user: {},
  error: {},
  errors: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };

    case SET_CURRENT_USER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        error: action.error
      };

    case SET_CURRENT_USER_ERROR:
      return {
        ...state,
        error: action.error
      };

    case SIGN_UP_ERRORS:
      return {
        ...state,
        isAuthenticated: false,
        error: action.error
      };

    case SIGNOUT_USER:
      return {
        ...state,
        ...initialState
      };
    default: return state;
  }
};
