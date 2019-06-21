import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';

const default_props = {};

function setup(props = default_props) {
  const wrapper = shallow(<Header {...props}/>);
  return { wrapper, props };
}

describe('Header Test Suite', () => {
  it('Should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});