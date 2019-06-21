'use strict'

import axios from 'axios';

import ReposEntity from 'src/business/entities/ReposEntity.js'
import UserEntity from 'src/business/entities/UserEntity.js'
import CommitEntity from 'src/business/entities/CommitEntity.js'

const BASE_URL = 'https://api.github.com';
const OWNER = 'reactjs';

export function createRepo(repo) {
  return new ReposEntity(repo);
}

export function createCommit(commit) {
  return new CommitEntity(commit);
}

const GithubRepository = {
  getUser() {
    return axios.get(`${BASE_URL}/users/${OWNER}`)
      .then(response => new UserEntity(response.data))
      .catch(error => error)
  },

  getUserRepos(page) {
    const LIMIT = 10;
    return axios.get(`${BASE_URL}/users/${OWNER}/repos?page=${page}&per_page=${LIMIT}`)
      .then(response => response.data.map(createRepo))
      .catch(error => error)
  },

  getRepoCommits(repo, page) {
    const LIMIT = 20;
    return axios.get(`${BASE_URL}/repos/${OWNER}/${repo}/commits?page=${page}&per_page=${LIMIT}`)
      .then(response => response.data.map(createCommit))
      .catch(error => error)
  }
}

export default GithubRepository