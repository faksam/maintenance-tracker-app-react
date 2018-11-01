import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import jwt from 'jwt-simple';
import config from '../../config';
import signInAction from '../../app/actions/signin.actions';

import * as types from '../../app/actions/types';
import mockData from '../__mocks__/mockData';
import mockCookieStorage from '../__mocks__/mockCookieStorage';


const mockStore = configureMockStore([thunk]);

window.Cookies = mockCookieStorage;

describe('Login Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch SET_CURRENT_USER when login action is successful', (done) => {
    const userDetails = {
      email: 'lifeis@gmail.com',
      password: 'lifeisarace'
    };
    moxios.stubRequest(`${config.apiUrl}/auth/login`, {
      status: 200,
      response: mockData.authResponse
    });

    const expectedActions = [{
      type: types.SET_CURRENT_USER,
      user: jwt.decode(mockData.authResponse.token,
        'LifeIsARaceBeLikeWaterMakingItsWayThroughAllObjects')
    }];
    const store = mockStore({});
    store.dispatch(signInAction(userDetails))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
});
