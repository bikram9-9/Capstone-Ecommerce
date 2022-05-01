import React, { Fragment, useContext, useState} from 'react'
import "./navigation-bar.styles.scss"
import {Link} from 'react-router-dom'
import marsLogo from '../../Assets/mars.png'
import './navigation-bar.styles.scss'
import { UserContext } from '../../context/user.context'
import {signOutUser} from '../../firebase/firebase.util'
import CartIcon from '../CartIcon/cart-icon.component'
import CartDropdown from '../CartDropdown/cart-dropdown.component'

const Navbar = () => {

  const {setCurrentUser,currentUser}  = useContext(UserContext);
  const [ishovering, setIsHovering] = useState(false);
  console.log(currentUser)

  const signOutHandler = async()=> {
    signOutUser();
    setCurrentUser(null);
  } 
  // const {email}= currentUser;
  
  return (
    <Fragment>
      <div className='navContainer'>
        <img src={marsLogo} width='40px' height='40px'/>
        <div className='linksContainer'>
          <Link className="link" to="/">Home </Link>
          {currentUser ? (
            <Link className="link " to="#" onClick={signOutHandler}>Sign Out</Link>
          ):(
            <Link className="link " to="/signin"> Sign In</Link>
          )}
          <Link className="link" to="shop">Shop </Link>

          <div onMouseOver={()=> setIsHovering(true)} onMouseOut={()=> setIsHovering(false)}> 
            <CartIcon/>
          </div>
          {/* {email == null ? (<div>{email}</div>): (<></>)} */}
          {/* {!currentUser==null ? ( <Link className="link " to="#"> {currentUser}</Link>): (<></>)} */}
        </div>
      </div>
      {ishovering ? <CartDropdown/> : <Fragment/>}
    </Fragment>
  )
}

export default Navbar 