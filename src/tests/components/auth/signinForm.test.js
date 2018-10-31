import React from 'react';
import { shallow } from 'enzyme';
import SignInTabForm from '../../../app/components/auth/SignInTabForm';

const props = {
  accountEmail: 'fakunlesamuel@gmail.com',
  accountPassword: 'Lifeisarace',
  handleSignIn: jest.fn(),
  handleChange: jest.fn(),
};
describe('AuthForms Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<SignInTabForm {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
