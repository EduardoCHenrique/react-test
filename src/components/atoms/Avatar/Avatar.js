import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Avatar.css';

const Avatar = ({image, className, size}) => {
  return <img src={image} className={classNames(`avatar ${size}`, className)} />
}

Avatar.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
}

Avatar.defaultProps = {
  size: 'small'
}

export default Avatar