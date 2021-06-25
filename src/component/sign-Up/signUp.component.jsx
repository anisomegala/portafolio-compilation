import React from 'react';

import { auth, creatUser } from '../../firebase/firebase';

import Button from '../custom-button/button.component';
import FormInput from  '../form-input/form-input.component';

import './signUp.style.scss'; 


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }


    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword} = this.state;

        if(!password === confirmPassword) {
            alert("Passwords don't match")
            return;
        } 

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await  creatUser(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (e){
            console.error(e);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-Up'>
                <h2 className='title'> If you do not have an account </h2>
                <span> Sign up with email and password</span>
                <form className='sign-up-form' onSubmit={ this.handleSubmit }>
                    <FormInput 
                    type="text"
                    name='displayName'
                    value={displayName}
                    onChange={this.handleChange}
                    label='Name'
                    required 
                    />
                    <FormInput
                    type="email"
                    name='email'
                    value={ email }
                    onChange={this.handleChange}
                    label='Email'
                    required 
                    />
                    <FormInput 
                    type="password"
                    name='password'
                    value={ password }
                    onChange={this.handleChange}
                    label='Password'
                    required 
                    />
                    <FormInput 
                    type="password"
                    name='confirmPassword'
                    value={ confirmPassword }
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required 
                    />
                    <Button type='submit'> Sign Up </Button>
                </form>
            </div>

        )
    }


}


export default SignUp;