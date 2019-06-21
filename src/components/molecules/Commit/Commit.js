import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Moment from 'moment';
import Avatar from 'src/components/atoms/Avatar';
import './commit.css';

const timePast = (date) => Moment(date).fromNow()

const Commit = ({className, sha, author, commit, html_url}) => {
  return(
    <div className={classNames('commit', className)}>
      <div className='commit__main-data'>
        <p className='commit__name'>
          <a href={html_url} target='_blank'>{commit.message}</a>
        </p>
        <div className='commit__author'>
          <Avatar image={author.avatar_url} size='small' className='commit__author__image' />
          <p className='commit__author__data'>
            <span className='commit__author__name'>{commit && commit.author.name}</span>
            <span className='commit__author__date'>{timePast(commit && commit.author.date)}</span>
          </p>
        </div>
      </div>
      <div className='commit__sha'>{sha}</div>
    </div>
  )
}

Commit.propTypes = {
  className: PropTypes.string,
  
}

export default Commit