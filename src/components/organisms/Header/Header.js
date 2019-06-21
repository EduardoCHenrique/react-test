import React from 'react'
import { GoMarkGithub } from "react-icons/go";
import {Link} from 'react-router-dom';

import './Header.css'

const Header = (props) => {  
  return (
    <header className="header">
      <div className="header__content container">
        <Link to='/'>
          <GoMarkGithub className='header__logo'/>
        </Link>
      </div>
    </header>
  )
}

export default Header
