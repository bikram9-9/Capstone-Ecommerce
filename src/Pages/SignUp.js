import React, { Component } from 'react'
import PrimaryButton from '../Components/buttons/primary-button/primary-button.component';
import InputField from '../Components/input-field/input-field.component';

export class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            signupInfo: [{
                label: "First Name",
                name: "firstName",
                type: "inputField",
                placeholder: "Singh",
                onChangeHandler: {},
                firstNameValue=""
            },
            {
                label: "Last Name",
                name: "lastName",
                type: "inputField",
                placeholder: "Singh",
                onChangeHandler: {},
                lastNameValue:""
            },
            {
                label: "Street Name",
                name: "streetName",
                type: "inputField",
                placeholder: "961 Saratoga Way..",
                onChangeHandler: {},
                streetNameValue:""
            },
            {
                label: "Zipcode",
                name: "zipcode",
                type: "inputField",
                placeholder: "961 Saratoga Way..",
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
            <div>
                {this.state.signupInfo.map(input => {
                    return <IunptField key={input.label} label={input.label} name= {input.name} type= {input.type} placeholder= {input.placeholder}/>
                })}
                <PrimaryButton text="Sign Up" type={small} onClickHandler ={this.onClickHandler}/>
            </div>
        )
    }
}

export default SignUp
