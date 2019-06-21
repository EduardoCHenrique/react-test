import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader.js';

const default_props = {};

function setup(props = default_props) {
  const wrapper = shallow(<Loader {...props}/>);
  return { wrapper, props };
}

describe('Loader Test Suite', () => {
  it('Should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});