import React from 'react';
import { shallow } from 'enzyme';
import AppRoutes from '../../app/routers/AppRouter';

describe('', () => {
  const wrapper = shallow(<AppRoutes />);

  it('renders the AppRoutes component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
