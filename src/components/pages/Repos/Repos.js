import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CommitList from 'src/components/organisms/CommitList';

const Repos = ({ commits, fetchingCommits, commitsError, handleLoadMoreCommits }) => {
  return(
    <main className="repos">
      <div className="repos__content">
        <CommitList
          commits={commits}
          fetchingCommits={fetchingCommits}
          commitsError={commitsError}
          handleLoadMoreCommits={handleLoadMoreCommits}/>
      </div>
    </main>
  )
}

Repos.propTypes = {
}

export default Repos