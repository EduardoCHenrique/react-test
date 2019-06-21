import React from 'react';
import { shallow } from 'enzyme';
import mockAxios from 'jest-mock-axios';
import GithubRepository, {createCommit, createRepo} from './GithubRepository.js';
import UserEntity from 'src/business/entities/UserEntity.js';

function setup(props = default_props) {
  const wrapper = shallow(<Repo />);
  return { wrapper, props };
}

afterEach(() => {
  mockAxios.reset()
});

describe('GithubRepository Test Suite', () => {
  describe('getUser method,', () => {
    it('should call axios with right params', () => {
      const expectedUrl = 'https://api.github.com/users/reactjs';
      let catchFn = jest.fn();
      let thenFn = jest.fn();
  
      GithubRepository.getUser()
      .then(thenFn)
      .catch(catchFn)
  
      expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl);
    });

    it('should return the expected response instance of UserEntity', () => {
      const expectedUrl = 'https://api.github.com/users/reactjs';
      let catchFn = jest.fn();
      let thenFn = jest.fn();
      
      GithubRepository.getUser()
      .then(response => {
        expect(response).toBeInstanceOf(UserEntity);
      })
    });
  })

  describe('getUserRepos method,', () => {
    it('should call axios with right params', () => {
      const page = 1;
      const expectedUrl = `https://api.github.com/users/reactjs/repos?page=${page}&per_page=10`;
      let catchFn = jest.fn();
      let thenFn = jest.fn();
  
      GithubRepository.getUserRepos(page)
      .then(thenFn)
      .catch(catchFn)
  
      expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl);
    });

    it('should return the expected response instance of UserEntity', () => {
      jest.mock('././GithubRepository'); 
      
      GithubRepository.getUserRepos()
      .then(() => {
        expect(createCommit).toHaveBeenCalled();
      })
    });
  })

  describe('getRepoCommits method,', () => {
    it('should call axios with right params', () => {
      const page = 1;
      const repo = 'anyRepo'
      const expectedUrl = `https://api.github.com/repos/reactjs/${repo}/commits?page=${page}&per_page=20`;
      let catchFn = jest.fn();
      let thenFn = jest.fn();
  
      GithubRepository.getRepoCommits(repo, page)
      .then(thenFn)
      .catch(catchFn)
  
      expect(mockAxios.get).toHaveBeenCalledWith(expectedUrl);
    });

    it('should return the expected response instance of UserEntity', () => {
      jest.mock('././GithubRepository'); 
      const page = 1;
      const repo = 'anyRepo'
      GithubRepository.getRepoCommits(repo, page)
      .then(() => {
        expect(createCommit).toHaveBeenCalled();
      })
    });
  })

});