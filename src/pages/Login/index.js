import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Forms/Button";
import { useNavigate } from "react-router-dom";
import FormInput from './../../components/Forms/FormInput';
import { useDispatch, useSelector } from "react-redux";
import { signInUser,signInWithGoogle,resetAllAuthForms } from "../../redux/User/user.actions";

const mapState = ({ user }) => ({
    signInSuccess: user.signInSuccess
});

const Login = (props) => {

    const initialState = useMemo(() => {
        return {
            email: '',
            password: ''
        }
    },[]);

    const [state, setState] = useState(initialState);
    const { email, password } = state;
    const dispatch = useDispatch();
    const { signInSuccess } = useSelector(mapState);

    const navigate = useNavigate();

    const handleChange = event => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });

    };
    useEffect(() => {
        if (signInSuccess) {
            setState(initialState);
            dispatch(resetAllAuthForms());
            navigate('/');
        }
    }, [signInSuccess, initialState, navigate,dispatch]);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signInUser({email, password}));
    }

    const handleGoogle = async e => {
        e.preventDefault();
        dispatch(signInWithGoogle());
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

            <Button type='submit'>Sign in</Button>
            <Button onClick={handleGoogle}>Sign in with Google</Button>
        </form>
    );
};

export default Login;