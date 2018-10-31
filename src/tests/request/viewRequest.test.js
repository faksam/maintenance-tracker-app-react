import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ConnectedViewRequest, { ViewRequest } from '../../app/components/request/ViewRequest';

const props = {
  fullname: 'fakunlesamuel@gmail.com',
  email: 'fakunlesamuel@gmail.com',
  password: 'Lifeisarace',
  confirmPassword: 'Lifeisarace',
  handleSignIn: jest.fn(),
  handleSignUp: jest.fn(),
  handleChange: jest.fn(),
  viewClickedRequest: jest.fn(),
  handleCreateRequest: jest.fn(),
  hideModalRequest: jest.fn(),
  signoutUserAction: jest.fn(),
  loadRequestsAction: jest.fn(),
  request: [{}],
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
    requests: []
  }

};
const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

describe('SignInTabForm Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<ConnectedViewRequest store={store} {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it('should set state to props', () => {
    const wrapper = shallow(<ConnectedViewRequest store={store} {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should render without throwing an error', () => {
    const wrapper = shallow(<ViewRequest store={store} {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it('should a new comment', () => {
    const wrapper = shallow(<ViewRequest store={store} {...props} />);
    const instance = wrapper.instance();
    instance.handleCloseError();
  });
  it('should set state to props', () => {
    const wrapper = shallow(<ViewRequest store={store} {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
});
