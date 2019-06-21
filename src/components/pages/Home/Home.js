import React from 'react'
import PropTypes from 'prop-types';
import Profile from 'src/components/organisms/Profile';
import RepoList from 'src/components/organisms/RepoList';

const Home = ({user, userRepos, fetchingUserRepos, reposError, handleLoadMoreRepos}) => {
  return(
    <main className="home">
      <header className="home__header">
        <div className="container">
          <Profile {...user} />
        </div>
      </header>
      <div className="home__content">
        <RepoList
          userRepos={userRepos}
          fetchingUserRepos={fetchingUserRepos}
          reposError={reposError}
          handleLoadMoreRepos={handleLoadMoreRepos}
          total={user && user.public_repos}
          />
      </div>
    </main>
  )
}

Home.propTypes = {
  user: PropTypes.object,
  fetchingUser: PropTypes.bool,
  userError: PropTypes.bool,
  userRepos: PropTypes.array,
  fetchingUserRepos: PropTypes.bool,
  reposError: PropTypes.bool,
  repoPage: PropTypes.number
}

export default Home