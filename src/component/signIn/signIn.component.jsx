import React from 'react';
import './signIn.style.scss';
import  FormInput from '../form-input/form-input.component.jsx';
import Button from '../custom-button/button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.js';



class SingIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }


    handleSubmit = async event => {
        event.preventDefault();

        const { email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch(e) {
            console.error(e);

        }

        this.setState({ email: '', password: '' });
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    };




    render() {
        return (
            <div className='courses-page' >
                <div className='sign-in' id='signIn'>
                <h3>Sign in for accsess to my courses!</h3>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                            id='email' 
                            value={this.state.email} 
                            handleChange={this.handleChange}
                            type="email" 
                            label='Email'
                            name='email' 
                            required 
                            />
                    
                    <FormInput  
                            id='password' 
                            value={this.state.password} 
                            handleChange={this.handleChange}
                            type="password" 
                            label='Password'
                            name='password' 
                            required 
                            />
            


                            <Button type="submit">Sign In</Button>   
                            <Button onClick={ signInWithGoogle }>Sign In with Google</Button>   
                    

                    </form>
                </div>
            </div>
        )
    }
}


export default SingIn;