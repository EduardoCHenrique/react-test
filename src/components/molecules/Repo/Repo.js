import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { GoRepoForked, GoStar } from "react-icons/go";
import {Link} from 'react-router-dom';

import './Repo.css';

const Repo = ({className, id, name, description, language, stargazers_count, forks_count}) => {
  return(
    <div className={classNames('repo', className)}>
      <p className='repo__name'>
        <Link to={`/repos/${name}`}>{name}</Link>
      </p>
      <p className='repo__description'>{description}</p>

      <footer className='repo__footer'>
        <span className='repo__footer__item'>
          {language}
        </span>
        <span className="repo__footer__item">
          <GoStar className='repo__footer__icon'/>
          {stargazers_count}
        </span>

        <span className="repo__footer__item">
          <GoRepoForked className='repo__footer__icon'/>
          {forks_count}
        </span>
      </footer>
    </div>
  )
}

Repo.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  stargazers_count: PropTypes.number,
  forks_count: PropTypes.number
}

export default Repo