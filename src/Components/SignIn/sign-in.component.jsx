import React, { Component } from 'react'
import PrimaryButton from '../../Components/buttons/primary-button/primary-button.component';
import InputField from '../../Components/input-field/input-field.component';
import './sign-in.styles.scss';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../firebase/firebase.util';
import  mars from '../../Assets/mars.png';
import {Link} from 'react-router-dom';
import googleLogo from '../../Assets/googleLogo.png'


export class SignIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            signInInfo: [{
                label: "Email or username",
                name: "email",
                type: "email",
                onChangeHandler: {},
                firstNameValue:""
            },
            {
                label: "Password",
                name: "Password",
                type: "password",
                onChangeHandler: {},
                lastNameValue:""
            },
             ]
      
    }
}

    onClickHandler = () =>{
        //store
        console.log("OnClickHandler Called")
    }

     logGoogleUser = async() =>{
        const {user} = await signInWithGooglePopup();
       const userDocRef= await createUserDocumentFromAuth(user);
    }


    render() {
        return (
            <div className="signInPage">
                <img src={mars} alt="MARS Residential Logo" width="80px" />
                <h1>Sign In</h1>
                <div className="container">
                    <div className="formContainer">
                        {this.state.signInInfo.map(input => {
                            return <InputField className="inputContainer" key={input.label} label={input.label} name= {input.name} type= {input.type} placeholder= {input.placeholder} autocomplete={input.name}/>
                        })}
                        <PrimaryButton  text="Sign In" redirectTo="/"onClickHandler ={this.onClickHandler}/>
                        <Link className="signUpDesc" to='/signup'>Sign Up for an Account</Link>
                    </div>
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
