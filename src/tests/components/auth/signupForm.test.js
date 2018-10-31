import React from 'react';
import { shallow } from 'enzyme';
import SignUpTabForm from '../../../app/components/auth/SignUpTabForm';

const props = {
  fullname: 'fakunlesamuel@gmail.com',
  email: 'fakunlesamuel@gmail.com',
  password: 'Lifeisarace',
  confirmPassword: 'Lifeisarace',
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
