import * as types from '../actions/types';
const initialState = {
  isAuthenticated: false,
  user: {},
  error: {}
};

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
};
export default userReducer;
