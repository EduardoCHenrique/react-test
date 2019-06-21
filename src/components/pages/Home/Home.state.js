import React, {Component} from 'react'
import Home from './Home'
import GithubRepository from 'src/infra/repositories/GithubRepository';

import './Home.css'

class HomeState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: undefined,
      fetchingUser: true,
      userError: false,
      userRepos: [],
      fetchingUserRepos: false,
      reposError: false
    }

    this.handleGetUserRepos = this.handleGetUserRepos.bind(this);
    this.handleGetUserReposError = this.handleGetUserReposError.bind(this);
    this.handleGetUser = this.handleGetUser.bind(this);
    this.handleGetUserError = this.handleGetUserError.bind(this);
    this.handleLoadMoreRepos = this.handleLoadMoreRepos.bind(this);
  }

  
  async componentDidMount() {
    await this.getUser();
    await this.getUserRepos();
  }

  getUser() {
    this.setState({ fetchingUser: true })

    return GithubRepository.getUser()
      .then(this.handleGetUser)
      .catch(this.handleGetUserError)
  }

  handleGetUser(user) {
    this.setState({
      user,
      fetchingUser: false,
      userError: false
    })
  }

  handleGetUserError(error) {
    this.setState({
      user: undefined,
      fetchingUser: false,
      userError: error
    })
  }

  getUserRepos(nextPage = 0) {
    this.setState({ fetchingUserRepos: true })
    GithubRepository.getUserRepos(nextPage)
      .then(this.handleGetUserRepos)
      .catch(this.handleGetUserReposError)
  }
  
  handleGetUserRepos(userRepos) {
    const newUserRepos = this.state.userRepos.concat(userRepos);

    this.setState({
      userRepos: newUserRepos,
      fetchingUserRepos: false,
      userReposError: false
    })
  }
  
  handleGetUserReposError(error) {
    this.setState({
      userRepos: [],
      fetchingUserRepos: false,
      userReposError: error
    })
  }
  
  handleLoadMoreRepos(nextPage) {
    if(!this.state.fetchingUserRepos) {
      this.getUserRepos(nextPage)
    }
  }

  render() {
    return (
      <Home
        handleLoadMoreRepos={this.handleLoadMoreRepos}
        {...this.state} /> 
      )
  }
}

export default HomeState;