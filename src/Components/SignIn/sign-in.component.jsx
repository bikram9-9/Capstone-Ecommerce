import React, { Component } from 'react'
import './sign-in.styles.scss';
import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../firebase/firebase.util';
import  mars from '../../Assets/mars.png';
import {Link} from 'react-router-dom';
import googleLogo from '../../Assets/googleLogo.png'


export class SignIn extends Component {

    constructor(props){
        super(props);
        this.state = {
                 email:'',
                 password:''
    }

}

    onEmailChange = (event) =>{
        const{value} = event.target;
        this.setState({ email: value });
    };
    
    onPasswordChange = (event) =>{
        const{value} = event.target;
        this.setState({ password: value });
    };

    onSubmitHandler = () => {
     console.log("email"+ this.state.email + "password" + this.state.password);
    }

     logGoogleUser = async() =>{
        const {user}= await signInWithGooglePopup();
       const userDocRef= await createUserDocumentFromAuth(user);
    }


    render() {
        return (
            <div className="signInPage">
                <img src={mars} alt="MARS Residential Logo" width="80px" />
                <h1>Sign In</h1>
                <div className="container">
                    <form className="formContainer" onSubmit={this.onSubmitHandler}>
                        <label className="label" >
                            Email
                            <input
                                name="Email"
                                type="email"
                                className="inputField"
                                onChange={this.onEmailChange}
                            />
                        </label>
                        <label className="label" >
                            Password
                            <input
                                name="Password"
                                type="password"
                                className="inputField"
                                onChange={this.onPasswordChange}
                            />
                        </label>
                        
                        <button type="submit">Sign In </button>
                        <Link className="signUpDesc" to='/signup'>Sign Up for an Account</Link>
                    </form>

                        <button className="googleSignIn" onClick={this.logGoogleUser}>
                        <img src={googleLogo} className="googleLogo" width="20px" height="20px"/>
                                Sign In with Google
                        </button>
                    
                </div>
            </div>

        )
    }
}

export default SignIn;
