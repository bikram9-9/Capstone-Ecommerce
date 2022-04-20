import {React,useContext, useState} from 'react'
import './sign-in.styles.scss';
import {signInWithGooglePopup,createUserDocumentFromAuth,signInUserWithEmailAndPassword} from '../../firebase/firebase.util';
import  mars from '../../Assets/mars.png';
import {Link} from 'react-router-dom';
import googleLogo from '../../Assets/googleLogo.png'
import { UserContext } from '../../context/user.context';

const SignIn = () => {
    
   const {setCurrentUser}= useContext(UserContext);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const onEmailChange = (event) =>{
        const{value} = event.target;
        setEmail(value);
    };
    
    const onPasswordChange = (event) =>{
        const{value} = event.target;
        setPassword(value);
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try{
            const user = await signInUserWithEmailAndPassword(email, password);
            console.log(user);
            setCurrentUser(user);
            
            // resetForm();
        }catch(error){
            console.log("ERROR IN SIGNING IN"+ error)
        }
    
    }

    const logGoogleUser = async() =>{
        const {user}= await signInWithGooglePopup();
       const userDocRef= await createUserDocumentFromAuth(user);
    }

    const resetForm = () =>{
        setEmail("");
        setPassword("")
    }

  return (
    <div className="signInPage">
                <img src={mars} alt="MARS Residential Logo" width="80px" />
                <h1>Sign In</h1>
                <div className="container">
                    <form className="formContainer" onSubmit={onSubmitHandler}>
                        <label className="label" >
                            Email
                            <input
                                name="Email"
                                type="email"
                                className="inputField"
                                onChange={onEmailChange}
                            />
                        </label>
                        <label className="label" >
                            Password
                            <input
                                name="Password"
                                type="password"
                                className="inputField"
                                onChange={onPasswordChange}
                            />
                        </label>
                        
                        <button type="submit">Sign In </button>
                        <Link className="signUpDesc" to='/signup'>Sign Up for an Account</Link>
                    </form>

                        <button className="googleSignIn" onClick={logGoogleUser}>
                        <img src={googleLogo} className="googleLogo" width="20px" height="20px"/>
                                Sign In with Google
                        </button>
                    
                </div>
            </div>
  )
}

export default SignIn