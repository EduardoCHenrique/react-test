import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Avatar from 'src/components/atoms/Avatar';
import { GoLocation, GoLink } from "react-icons/go";

import './Profile.css';

const Profile = ({avatar_url, name, bio, location, blog, className}) => {
  return(
    <div className={classNames('profile', className)}>
      <Avatar className="profile__avatar" image={avatar_url} size='medium' />
      <div className="profile__data">
        <h2 className="profile__name">{name}</h2>
        <h3 className="profile__bio">{bio}</h3>
        <div className="profile__details">
          <span className="profile__detail">
            <GoLocation className='profile__detail__icon'/>
            {location}
          </span>
          <span className="profile__detail">
            <GoLink className='profile__detail__icon'/>
            <a href={blog} className="profile__detail__link" target="_blank">{blog}</a>
          </span>
        </div>
      </div>
    </div>
  )
}

Profile.propTypes = {
  avatar_url: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string,
  location: PropTypes.string,
  blog: PropTypes.string,
  className: PropTypes.string
}

export default Profile