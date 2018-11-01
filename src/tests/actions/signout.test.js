import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../../app/actions/types';
import signoutUser from '../../app/actions/signout.actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('should dispatch SIGNOUT_USER action', () => {
  const expectedActions = [{
    type: types.SIGNOUT_USER,
  }];
  const store = mockStore({});
  store.dispatch(signoutUser());
  expect(store.getActions()).toEqual(expectedActions);
});
