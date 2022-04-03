import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom';
import {ReactComponent as MarsLogo} from '../../Assets/marsLogo.svg'

const Navigation = () => {
  return (
  <Fragment>
    <MarsLogo className='marsLogo' to='/'/>
    <Link to='/'>HOME</Link>
    <Link to='/shop'>SHOP</Link>
    <Link to='/cart'>CART</Link>
    <Link to='/auth'>SIGN IN</Link>
    <Outlet/>
  </Fragment>
  )
}

export default Navigation;