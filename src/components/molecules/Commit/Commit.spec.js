import React from 'react';
import { shallow } from 'enzyme';
import Commit from './Commit.js';
import faker from 'faker';

const default_props = {
  className: '',
  sha: '',
  author: {
    avatar_url: faker.image.avatar()
  },
  commit: {
    author: {
      name: faker.name.findName(),
      date: faker.date.past()
    }
  },
  html_url: ''
};

function setup(props = default_props) {
  const wrapper = shallow(<Commit {...props} />);
  return { wrapper, props };
}

describe('Commit Test Suite', () => {
  it('Should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});