import React, { Component } from 'react'
import './sign-up.styles.scss';
import  mars from '../../Assets/mars.png';
import {auth, createAuthUserWithEmailAndPassword} from '../../firebase/firebase.util'

export class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            passwordMatch: true,
            passwordMeetsRequirements: true
        };
    }

    onNameChange = (event) =>{
        const {value} = event.target;
        this.setState({
            name: value
        })
    }
    onEmailChange = (event) =>{
        const {value} = event.target;
        this.setState({
            email : value
        })
    }
    onPasswordChange = (event) =>{
        const {value} = event.target;
        this.setState({
            password : value
        })
    }
    onConfirmPasswordChange = async (event) =>{
        const {value} = event.target;

        this.setState({
            confirmPassword : value
        }, () =>{
            this.passwordsMatch();
     }
        )
    }

    passwordsMatch = async () =>{
        if(this.state.password === this.state.confirmPassword){
        await this.setState({passwordMatch: true})
        }else{
            await this.setState({passwordMatch: false})
        }
    }


    SubmitHandler = async (event) =>{
        event.preventDefault();
        this.passwordsMatch();

        if(this.state.confirmPassword.length< 6){
            this.setState({
                passwordMeetsRequirements:false
        })
        }
        if(this.state.passwordMatch){
            try{
                const userObj = await createAuthUserWithEmailAndPassword(this.state.email,this.state.password);
                console.log(userObj)

            }catch(error){
                console.log("user creation error", error)
            }
        }else{
            console.log("passwords dont match")
        }
    }

  
    render() {
        return (
            <div className="signUpPage">
                <img src={mars} alt="MARS Residential Logo" width="80px" />
                <h1>Sign Up</h1>
                <form className="formContainer" onSubmit={this.SubmitHandler}>
                        <label className="label" >
                            Name
                            <input
                                name="name"
                                type="name"
                                className="inputField"
                                onChange={this.onNameChange}
                            />
                        </label>
                        <label className="label" >
                            Email
                            <input
                                name="email"
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
                        <label className="label" >
                            Confirm Password
                            <input
                                name="ConfirmPassword"
                                type="password"
                                className="inputField"
                                onChange={this.onConfirmPasswordChange}
                            />
                        </label>
                       {!this.state.passwordMatch ? <div>Passwords need to Match</div> : <></>}
                       {!this.state.passwordMeetsRequirements ? <div>Password doesn't meet requirements</div> : <></>}
                        <button type="submit">Sign Up </button>
                    </form>
            </div>

        )
    }
}

export default SignUp
