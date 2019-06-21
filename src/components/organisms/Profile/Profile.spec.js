import React from 'react';
import { shallow } from 'enzyme';
import Profile from './Profile.js';

const default_props = {};

function setup(props = default_props) {
  const wrapper = shallow(<Profile />);
  return { wrapper, props };
}

describe('Profile Test Suite', () => {
  it('Should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});