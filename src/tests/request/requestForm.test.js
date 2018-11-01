import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ConnectedRequestForm, { RequestForm } from '../../app/components/request/RequestForm';

const props = {
  fullname: 'fakunlesamuel@gmail.com',
  email: 'fakunlesamuel@gmail.com',
  password: 'Lifeisarace',
  confirmPassword: 'Lifeisarace',
  handleSignIn: jest.fn(),
  handleSignUp: jest.fn(),
  handleChange: jest.fn(),
  hideModalRequest: jest.fn(),
  createRequestAction: jest.fn(),
  request: {},
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
  },
  errors: {},
};
const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

describe('SignInTabForm Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<ConnectedRequestForm store={store} {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  it('should set state to props', () => {
    const wrapper = shallow(<ConnectedRequestForm store={store} {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should a create new request form', () => {
    const wrapper = shallow(<RequestForm store={store} {...props} />);
    const instance = wrapper.instance();
    const event = {
      preventDefault: jest.fn()
    };
    wrapper.setState({
      description: 'Ibadan is a wonderful Place',
      title: 'It is a neccesaarate',
    });
    instance.onSubmit(event);
  });
  it('should a simulate typing', () => {
    const wrapper = shallow(<RequestForm store={store} {...props} />);
    const instance = wrapper.instance();
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'title',
        value: 'come',
        textContent: 'nothing',
        valueAsDate: {
          toDateString: () => 'October 12, 2010',
        },
        files: ['.png', 'jpeg'],
        matches: () => true,
      },
    };
    instance.handleCloseError();
    wrapper.setState({
      description: 'Ibadan is a wonderful Place',
      title: 'It is a neccesaarate',
      errors: {
        description: 'Error',
        title: 'Error',
      }
    });
    instance.onChange(event);
  });
  it('should render without throwing an error', () => {
    const wrapper = shallow(<RequestForm store={store} {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
