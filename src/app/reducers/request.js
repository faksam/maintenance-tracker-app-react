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
    // case types.UPDATE_COMMENT_SUCCESSFUL:
    //   return {
    //     ...state,
    //     comments: {
    //       comments:
    //       state.comments.comments.map(comment => (comment.id === action.comment.id
    //         ? action.comment.comment : comment)),
    //       paginationMeta: state.comments.paginationMeta
    //     }
    //   };

    // case types.DELETE_COMMENT_SUCCESSFUL:
    //   return {
    //     ...state,
    //     comments: {
    //       comments:
    //       state.comments.comments.filter(comment => comment !== action.comment),
    //       paginationMeta:
    //       Object.assign(state.comments.paginationMeta,
    //         { totalCount: state.comments.paginationMeta.totalCount - 1 })
    //     }
    //   };
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
