import React from 'react';
import { shallow } from 'enzyme';
import Repo from './Repo.js';

const default_props = {
  className: '',
  id: '',
  name: '',
  description: '',
  language: '',
  stargazers_count: 10,
  forks_count: 10,
};

function setup(props = default_props) {
  const wrapper = shallow(<Repo />);
  return { wrapper, props };
}

describe('Repo Test Suite', () => {
  it('Should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});