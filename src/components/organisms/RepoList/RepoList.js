import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Repo from 'src/components/molecules/Repo';
import Loader from 'src/components/atoms/Loader';
import InfiniteScroll from 'react-infinite-scroller';

import './RepoList.css';

const renderRepo = (repo, index) => <Repo key={`repo-${index}`} {...repo} />

const RepoList = ({className, userRepos, page, handleLoadMoreRepos, total}) => {

  return (
    <div className={classNames('repo-list container', className)}>
      <InfiniteScroll
        pageStart={page}
        loadMore={handleLoadMoreRepos}
        hasMore={userRepos.length < total}
        loader={<Loader />}
        useWindow={false}
        initialLoad={false}>
        {userRepos.map(renderRepo)}
      </InfiniteScroll>
    </div>
  )
}

RepoList.propTypes = {
  className: PropTypes.string,
  userRepos: PropTypes.array,
  fetchingUserRepos: PropTypes.bool,
  reposError: PropTypes.bool
}

export default RepoList