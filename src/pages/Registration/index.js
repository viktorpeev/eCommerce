import React, {useState } from "react";
import './styles.scss';

import FormInput from './../../components/Forms/FormInput';
import Button from './../../components/Forms/Button';
const Registration = (proops) => {
    const [state,setState] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    });

    const {displayName,email,password,confirmPassword} = state;

    const handleChange = event => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };

    return (
        <div className='registration'>
            <div className='wrap'>
                <h1>Signup</h1>
            </div>
            <form>
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
                    name="password"
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