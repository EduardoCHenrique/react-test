import React from 'react';
import { shallow } from 'enzyme';
import CommitList from './CommitList.js';
import faker from 'faker'

const default_props = {
  className: faker.random.word(),
  commits: [],
  fetchingCommits: false,
  commitsError: false
};

function setup(props = default_props) {
  const wrapper = shallow(<CommitList {...props} />);
  return { wrapper, props };
}

describe('CommitList Test Suite', () => {
  it('Should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});