import { combineReducers } from 'redux';
import auth from './auth';
import requestReducer from './request';
import currentUser from './userReducer';

const rootReducer = combineReducers({
  auth,
  requestReducer
});

export default rootReducer;
