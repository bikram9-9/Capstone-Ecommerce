import React, { Fragment, useContext, useState} from 'react'
// import "./navigation-bar.styles"
import {Link} from 'react-router-dom'
import marsLogo from '../../Assets/mars.png'
import {NavigationContianer, LinksContainer,StyledLink} from './navigation-bar.styles'
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
     <NavigationContianer>
        <img src={marsLogo} width='40px' height='40px'/>
        <LinksContainer>
            <StyledLink  to="/">Home </StyledLink>
            {currentUser ? (
              <StyledLink className="link " to="#" onClick={signOutHandler}>Sign Out</StyledLink>
            ):(
              <StyledLink className="link " to="/signin"> Sign In</StyledLink>
            )}
            <StyledLink className="link" to="shop">Shop </StyledLink>

            <div onMouseOver={()=> setIsHovering(true)} onMouseOut={()=> setIsHovering(false)}> 
              <CartIcon/>
            </div>
            {/* {email == null ? (<div>{email}</div>): (<></>)} */}
            {/* {!currentUser==null ? ( <Link className="link " to="#"> {currentUser}</Link>): (<></>)} */}
        </LinksContainer>
      </NavigationContianer>
      {ishovering ? <CartDropdown/> : <Fragment/>}
    </Fragment>
  )
}

export default Navbar 