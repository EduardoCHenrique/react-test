import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Avatar.js';

const default_props = {
  image: 'umageurl'
};

function setup(props = default_props) {
  const wrapper = shallow(<Avatar {...props}/>);
  return { wrapper, props };
}

describe('Avatar Test Suite', () => {
  it('Should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});