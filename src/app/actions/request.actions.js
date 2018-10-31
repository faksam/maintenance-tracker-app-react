import axios from 'axios';
import config from '../../config';
import * as actionTypes from './types';


export const createRequestSuccess = request => ({
  type: actionTypes.CREATE_REQUEST_SUCCESSFUL,
  request
});

export const requestError = error => ({
  type: actionTypes.REQUEST_ERRORS,
  error
});

export const loadRequests = user => dispatch => axios(
  `${config.apiUrl}${user.url}`
)
  .then((res) => {
    debugger;
    dispatch({
      type: actionTypes.LOAD_REQUESTS_SUCCESSFUL,
      requests: res.data.data,
    });
  }).catch((error) => {
    dispatch(requestError({
      status: error.response.status,
      data: error.response.data
    }));
  });

export const createRequest = request => dispatch => axios.post(
  `${config.apiUrl}users/requests`, { request }
)
  .then((res) => {
    dispatch(createRequestSuccess(res.data));
  })
  .catch((error) => {
    dispatch(commentError({
      status: error.response.status,
      data: error.response.data
    }));
  });
