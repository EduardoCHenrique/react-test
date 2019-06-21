import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Loader.css'

const Loader = ({className}) => {
  return <div className={classNames(`loader`, className)} />
}

Loader.propTypes = {
  className: PropTypes.string,
}

export default Loader
