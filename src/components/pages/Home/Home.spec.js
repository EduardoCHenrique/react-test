import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home.js';

const default_props = {};

function setup(props = default_props) {
  const wrapper = shallow(<Home />);
  return { wrapper, props };
}

describe('Home Test Suite', () => {
  it('Should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});