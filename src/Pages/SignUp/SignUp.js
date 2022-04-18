import React, { Component } from 'react'
import PrimaryButton from '../../Components/buttons/primary-button/primary-button.component';
import InputField from '../../Components/input-field/input-field.component';
import './sign-up.styles.scss';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../firebase/firebase.util';
import { async } from '@firebase/util';

export class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            signupInfo: [{
                label: "First Name",
                name: "firstName",
                type: "inputField",
                onChangeHandler: {},
                firstNameValue:""
            },
            {
                label: "Last Name",
                name: "lastName",
                type: "inputField",
                onChangeHandler: {},
                lastNameValue:""
            },
            {
                label: "Street Name",
                name: "streetName",
                type: "inputField",
                onChangeHandler: {},
                streetNameValue:""
            },
            {
                label: "Zipcode",
                name: "zipcode",
                type: "inputField",
                onChangeHandler: {},
                zipCodeValue:""
            }   
             ]
    
        };
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
            <div className="signUpPage">
                <div className="formContainer">
                    {this.state.signupInfo.map(input => {
                        return <InputField className="inputContainer" key={input.label} label={input.label} name= {input.name} type= {input.type} placeholder= {input.placeholder}/>
                    })}
                    <PrimaryButton  text="Sign Up" redirectTo="/"onClickHandler ={this.onClickHandler}/>
                    <button onClick={this.logGoogleUser}>
                        Sign In with Google
                    </button>
                </div>
            </div>

        )
    }
}

export default SignUp
