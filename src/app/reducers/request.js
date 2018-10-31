import * as types from '../actions/types';

const initialState = {
  requests: [],
  request: {},
};
/**
 *
 * @param {object} state - InitialState
 * @param {object} action - Action Object
 *
 * @returns {object} state CurrentState
 */
export default function requestReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_REQUEST_SUCCESSFUL:
      return {
        ...state,
        requests: [action.request, ...state.requests],
      };
    case types.LOAD_REQUESTS_SUCCESSFUL:
      return {
        ...state,
        requests: action.requests
      };
    case types.LOAD_REQUEST_SUCCESS:
      return {
        ...state,
        request: action.request,
      };

    default:
      return state;
  }
}
