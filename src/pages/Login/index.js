import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Forms/Button";
import { signInWithGoogle, auth } from "../../firebase/utilis";

import FormInput from './../../components/Forms/FormInput';

const Login = (props) => {

    const initialState = {
        email: '',
        password: ''
    }
    const [state, setState] = useState(initialState);
    const { email, password } = state;

    const handleChange = event => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });

    };


    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setState(initialState);
        } catch (err) {
            // console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                type='email'
                name='email'
                value={email}
                placeholder='Email'
                onChange={handleChange}
            />
            <FormInput
                type='password'
                name='password'
                value={password}
                placeholder='Password'
                onChange={handleChange}
            />
            <Link to='/recovery'>
                <p>Forgot password</p>
            </Link>

            <Button onClick={handleSubmit}>Sign in</Button>
            <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        </form>
    );
};

export default Login;