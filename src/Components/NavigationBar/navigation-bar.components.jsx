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
          <Link className="link" to="/">Home </Link>
          <Link className="link " to="/signin"> Sign In</Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar 