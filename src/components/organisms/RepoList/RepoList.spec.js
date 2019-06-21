import React from 'react';
import { shallow } from 'enzyme';
import RepoList from './RepoList.js';
import faker from 'faker'

const default_props = {
  className: faker.random.word(),
  userRepos: [],
  fetchingUserRepos: false,
  reposError: false
};

function setup(props = default_props) {
  const wrapper = shallow(<RepoList {...props} />);
  return { wrapper, props };
}

describe('RepoList Test Suite', () => {
  it('Should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});