import { combineReducers } from 'redux';
import auth from './auth';
import requestReducer from './request';

const rootReducer = combineReducers({
  auth,
  requestReducer
});

export default rootReducer;
