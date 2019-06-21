import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Loader from 'src/components/atoms/Loader';
import Commit from 'src/components/molecules/Commit';
import InfiniteScroll from 'react-infinite-scroller';

import './CommitList.css';

const renderCommit = (commit, index) => <Commit key={`commit-${index}`} {...commit} />

const CommitList = ({className, commits, handleLoadMoreCommits}) => {
  return (
    <div className={classNames('commit-list container', className)}>
      <InfiniteScroll
        loadMore={handleLoadMoreCommits}
        hasMore={true}
        loader={<Loader />}
        useWindow={false}
        initialLoad={false}>
        {commits.map(renderCommit)}
      </InfiniteScroll>
    </div>
  )
}

CommitList.propTypes = {
  className: PropTypes.string,
  commits: PropTypes.array,
  fetchingCommits: PropTypes.bool,
  commitsError: PropTypes.bool
}

export default CommitList