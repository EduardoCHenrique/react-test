import React from 'react';
import { shallow } from 'enzyme';
import Repos from './Repos.js';

const default_props = {};

function setup(props = default_props) {
  const wrapper = shallow(<Repos />);
  return { wrapper, props };
}

describe('Repos Test Suite', () => {
  it('Should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});