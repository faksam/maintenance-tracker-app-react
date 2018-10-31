import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import AuthForms from '../../../app/components/auth/AuthForms';

const props = {
  fullname: 'fakunlesamuel@gmail.com',
  email: 'fakunlesamuel@gmail.com',
  password: 'Lifeisarace',
  confirmPassword: 'Lifeisarace',
  handleSignUp: jest.fn(),
  handleChange: jest.fn(),
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

describe('SignInTabForm Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<AuthForms store={store} {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it('should set state to props', () => {
    const wrapper = shallow(<AuthForms store={store} {...props} />);
    expect(wrapper.state()).toEqual({});
  });
  // it('should not create an empty article', () => {
  //   const wrapper = shallow(<CommentForm {...props} />);
  //   const instance = wrapper.instance();
  //   const event = {
  //     preventDefault: jest.fn()
  //   };
  //   wrapper.setState({ body: '' });
  //   expect(instance.isValid()).toBe(false);
  //   instance.onSubmit(event);
  // });
  // it('should a new comment', () => {
  //   const wrapper = shallow(<CommentForm {...props} />);
  //   const instance = wrapper.instance();
  //   const event = {
  //     preventDefault: jest.fn()
  //   };
  //   wrapper.setState({ body: 'Samuel is a boy' });
  //   expect(instance.isValid()).toBe(true);
  //   instance.onSubmit(event);
  // });
  // it('should close error alert', () => {
  //   const wrapper = shallow(<CommentForm {...props} />);
  //   const instance = wrapper.instance();
  //   instance.handleCloseError();
  // });
  // it('should set comment body when comment form body changes', () => {
  //   const wrapper = shallow(<CommentForm {...props} />);
  //   const event = {
  //     preventDefault: jest.fn(),
  //     target: {
  //       id: 'body',
  //       value: 'This is a comment'
  //     }
  //   };
  //   wrapper.setState({ errors: { [event.target.id]: 'mock' } });
  //   wrapper.instance().onChange(event);
  //   expect(wrapper.instance().state[event.target.id])
  //     .toBe(event.target.value);
  // });
  // it('should set state to props', () => {
  //   const wrapper = shallow(<ConnectedCommentForm store={store} {...props} />);
  //   expect(wrapper.state()).toEqual({});
  // });
});
