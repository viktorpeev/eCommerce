import React, { useEffect, useMemo, useState } from "react";
import './styles.scss';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpUserStart } from "../../redux/User/user.actions";

import FormInput from './../../components/Forms/FormInput';
import Button from './../../components/Forms/Button';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
});

const Registration = (props) => {
    const { currentUser, userErr } = useSelector(mapState);
    const initialState = useMemo(()=>{
        return{
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
        }
    },[])

    const [state, setState] = useState(initialState);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = event => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        dispatch(signUpUserStart({
            displayName,
            email,
            password,
            confirmPassword
        }));
    }

    useEffect(() => {
        if (currentUser) {
            setState(initialState);
            navigate('/');
        }
    }, [currentUser,initialState,navigate,dispatch]);

    useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0) {
            setState({ ...state, error: userErr });
        }

    }, [userErr,state]);

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