import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ConnectedAuthForm, { AuthForm } from '../../../app/components/auth/AuthForms';

const props = {
  fullname: 'fakunlesamuel@gmail.com',
  email: 'fakunlesamuel@gmail.com',
  password: 'Lifeisarace',
  confirmPassword: 'Lifeisarace',
  handleSignIn: jest.fn(),
  handleSignUp: jest.fn(),
  handleChange: jest.fn(),
  signUpUser: jest.fn(),
  signInUser: jest.fn(),
};
const initialState = {
  auth: {
    isAuthenticated: true,
    error: {},
    user: {
      username: 'joeeasy',
      email: 'joeeasy@gmail.com',
      role: 'User',
      id: '6bf54873-6033-4ab0-855d-336a34e1dfbc',
      iat: 1540985284931
    }
  },

};
const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

describe('AuthForm Component', () => {
  it('should signin and signout user', () => {
    const wrapper = shallow(<AuthForm {...props} />);
    const instance = wrapper.instance();
    const e = {
      preventDefault: jest.fn()
    };
    wrapper.setState({
      fullname: 'fakunlesamuel@gmail.com',
      email: 'fakunlesamuel@gmail.com',
      password: 'Lifeisarace',
      confirmPassword: 'Lifeisarace',
      accountEmail: 'fakunlesamuel@gmail.com',
    });
    instance.handleSignIn(e);
    instance.handleSignUp(e);
    instance.handleCloseError();
  });
  it('should render without throwing an error', () => {
    const wrapper = shallow(<AuthForm store={store} {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it('should set state to props', () => {
    const wrapper = shallow(<AuthForm store={store} {...props} />);
    expect(wrapper.state()).toEqual({
      errors: {},
      email: '',
      password: '',
      fullname: '',
      confirmPassword: '',
      accountEmail: '',
      accountPassword: '',
      signInFormTabContent: 'tabcontent',
      signUpFormTabContent: 'tabcontent-display',
      signInTab: 'tablinks sign-tab',
      signUpTab: 'tablinks sign-tab active',
      errorDivClass: 'display-none',
    });
  });
  it('should a close error', () => {
    const wrapper = shallow(<AuthForm {...props} />);
    const instance = wrapper.instance();
    const e = {
      preventDefault: jest.fn()
    };
    wrapper.setState({
      fullname: 'fakunlesamuel@gmail.com',
      email: 'fakunlesamuel@gmail.com',
      password: 'Lifeisarace',
      confirmPassword: 'Lifeisarace',
      accountEmail: 'fakunlesamuel@gmail.com',
    });
    instance.handleSignIn(e);
    instance.handleSignUp(e);
    instance.handleCloseError();
  });
});
