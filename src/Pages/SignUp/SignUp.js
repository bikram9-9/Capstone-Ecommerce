import React, { Component } from 'react'
import PrimaryButton from '../../Components/buttons/primary-button/primary-button.component';
import InputField from '../../Components/input-field/input-field.component';
import './sign-up.styles.scss';

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

    render() {
        return (
            <div className="signUpPage">
                <div className="formContainer">
                    {this.state.signupInfo.map(input => {
                        return <InputField className="inputContainer" key={input.label} label={input.label} name= {input.name} type= {input.type} placeholder= {input.placeholder}/>
                    })}
                    <PrimaryButton  text="Sign Up" redirectTo="/"onClickHandler ={this.onClickHandler}/>
                </div>
            </div>

        )
    }
}

export default SignUp
