import React, { Fragment } from 'react'
import "./navigation-bar.styles.scss"
import {Link} from 'react-router-dom'
import marsLogo from '../../Assets/mars.png'
import './navigation-bar.styles.scss'

const Navbar = () => {
  return (
    <Fragment>
      <div className='navContainer'>
        <img src={marsLogo} width='40px'/>
        <div className='linksContainer'>
          <Link to="/">
              Home
          </Link>
          <Link to="/signup">
              Sign Up
          </Link>
        </div>

      </div>
    </Fragment>
  )
}

export default Navbar 