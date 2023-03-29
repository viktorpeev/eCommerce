import React, { useState } from "react";
import './styles.scss';
import { useNavigate } from "react-router-dom";

import { auth, handleUserProfile } from './../../firebase/utilis';
import FormInput from './../../components/Forms/FormInput';
import Button from './../../components/Forms/Button';
const Registration = (proops) => {

    const initialState = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
    }
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = event => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            const err = ['Passwords do not match'];
            setState({ error: err });
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);
            await handleUserProfile(user,{displayName});
            setState(initialState);
            navigate('/');
        } catch(err) {
            // console.log(err);
        }

    }
    const { displayName, email, password, confirmPassword, error } = state;

    return (
        <div className='registration'>
            <div className='wrap'>
                <h1>Signup</h1>
            </div>
            {error.length > 0 && (
                <ul>
                    {
                        error.map((err, index) => (
                            <li key={index}>{err}</li>
                        ))
                    }
                </ul>
            )}
            <form onSubmit={handleFormSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    placeholder="Name"
                    onChange={handleChange}
                />
                <FormInput
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={handleChange}
                />
                <FormInput
                    type="text"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={handleChange}
                />
                <FormInput
                    type="text"
                    name="confirmPassword"
                    value={confirmPassword}
                    placeholder="Confirm password"
                    onChange={handleChange}
                />
                <Button type='submit'>
                    Register
                </Button>
            </form>
        </div>
    );
};

export default Registration;