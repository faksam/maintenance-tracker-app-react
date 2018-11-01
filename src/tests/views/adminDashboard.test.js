import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ConnectedDashboard, { Dashboard } from '../../app/views/AdminDashboard';
import mockData from '../__mocks__/mockData';

const props = {
  fullname: 'fakunlesamuel@gmail.com',
  email: 'fakunlesamuel@gmail.com',
  password: 'Lifeisarace',
  confirmPassword: 'Lifeisarace',
  handleSignIn: jest.fn(),
  handleSignUp: jest.fn(),
  handleChange: jest.fn(),
  handleSignOut: jest.fn(),
  hideModalRequest: jest.fn(),
  signoutUserAction: jest.fn(),
  loadRequestsAction: jest.fn(),
  requests: mockData.data,
  request: mockData.data[0],
  history: {},
  user: {
    username: 'joeeasy',
    email: 'joeeasy@gmail.com',
    role: 'Admin',
    id: '6bf54873-6033-4ab0-855d-336a34e1dfbc',
    iat: 1540985284931
  },
};
const initialState = {
  auth: {
    isAuthenticated: true,
    error: {},
    user: {
      username: 'joeeasy',
      email: 'joeeasy@gmail.com',
      role: 'Admin',
      id: '6bf54873-6033-4ab0-855d-336a34e1dfbc',
      iat: 1540985284931
    }
  },
  requestReducer: {
    requests: mockData.data,
    request: mockData.data[0],
  }

};
const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

describe('SignInTabForm Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Dashboard store={store} {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it('should set state to props', () => {
    const wrapper = shallow(<Dashboard store={store} {...props} />);
    expect(wrapper.state()).toEqual({
      request: {},
      showViewRequest: false
    });
  });
  it('should render without throwing an error', () => {
    const wrapper = shallow(<ConnectedDashboard store={store} {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it('should a new comment', () => {
    const wrapper = shallow(<Dashboard {...props} />);
    const instance = wrapper.instance();
    const e = {
      preventDefault: jest.fn()
    };
    // expect(instance.isValid()).toBe(true);
    instance.viewClickedRequest({}, e);
    instance.hideModalRequest();
  });
});
