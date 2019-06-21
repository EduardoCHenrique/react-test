import React, {Component} from 'react'
import Repos from './Repos'
import { withRouter } from "react-router";

import GithubRepository from 'src/infra/repositories/GithubRepository';

class ReposState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repoPage: 0,
      commits: [],
      fetchingCommits: false,
      commitsError: false
    }
    this.handlegetRepoCommits = this.handlegetRepoCommits.bind(this);
    this.handlegetRepoCommitsError = this.handlegetRepoCommitsError.bind(this);
    this.handleLoadMoreCommits = this.handleLoadMoreCommits.bind(this);
  }

  async componentDidMount() {
    this.getRepoCommits()
  }

  getRepoCommits(nextPage = 0) {
    this.setState({ fetchingCommits: true });

    GithubRepository.getRepoCommits(this.props.match.params.id, nextPage)
      .then(this.handlegetRepoCommits)
      .catch(this.handlegetRepoCommitsError)
  }

  handlegetRepoCommits(commits) {
    const newCommits = this.state.commits.concat(commits);

    this.setState({
      commits: newCommits,
      fetchingCommits: false,
      commitsError: false
    })
  }

  handlegetRepoCommitsError(error) {
    this.setState({
      commits: [],
      fetchingCommits: false,
      commitsError: true
    })
  }

  handleLoadMoreCommits(nextPage) {
    if(!this.state.fetchingCommits) {
      this.getRepoCommits(nextPage)
    }
  }

  render() {
    return ( 
      <Repos
        handleLoadMoreCommits={this.handleLoadMoreCommits}
        {...this.state} /> 
    )
  }
}

ReposState.propTypes = {

}

export default withRouter(ReposState);