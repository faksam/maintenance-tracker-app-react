import React from 'react';
import { shallow } from 'enzyme';
import SignUpTabForm from '../../../app/components/auth/SignUpTabForm';

const props = {
  errors: {},
  email: '',
  password: '',
  fullname: '',
  confirmPassword: '',
  errorDivClass: 'display-none',
  handleSignUp: jest.fn(),
  handleChange: jest.fn(),
};
describe('SignUpTabForm Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<SignUpTabForm {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
