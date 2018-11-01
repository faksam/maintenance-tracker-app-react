import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ConnectedDashboard, { Dashboard } from '../../app/views/UserDashboard';
import mockData from '../__mocks__/mockData';

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
  createRequestAction: jest.fn(),
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

describe('Dashboard Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Dashboard store={store} {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it('should set state to props', () => {
    const wrapper = shallow(<Dashboard store={store} {...props} />);
    expect(wrapper.state()).toEqual({
      title: '',
      description: '',
      request: {},
      showViewRequest: false,
      showRequestForm: false,
      showToggleNav: false,
      toggleNav: '',
      displayBlock: 'display-none',
    });
  });
  it('should render without throwing an error when connected', () => {
    const wrapper = shallow(<ConnectedDashboard store={store} {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it('should set state to props', () => {
    const wrapper = shallow(<ConnectedDashboard store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
  });
  it('ComponentDidMount', () => {
    const wrapper = shallow(<ConnectedDashboard store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
    expect(props.loadRequestsAction).toHaveBeenCalled();
  });
  it('should view clicked request', () => {
    const wrapper = shallow(<Dashboard {...props} />);
    const instance = wrapper.instance();
    const event = {
      preventDefault: jest.fn()
    };
    instance.viewClickedRequest({}, event);
    instance.handleCreateRequest(event);
    instance.handleSignOut(event);
    instance.hideModalRequest();
  });
});
