import React, { Fragment } from 'react'
import "./navigation-bar.styles.scss"
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <Fragment>
        <Link to="/">
            Home
        </Link>
        <Link to="/signup">
            Sign Up
        </Link>
    </Fragment>
  )
}

export default Navbar