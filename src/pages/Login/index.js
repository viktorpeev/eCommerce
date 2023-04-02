import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Forms/Button";
import { useNavigate } from "react-router-dom";
import FormInput from './../../components/Forms/FormInput';
import { useDispatch, useSelector } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../redux/User/user.actions";

const mapState = ({ user }) => ({
    currentUser: user.currentUser
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
    const { currentUser } = useSelector(mapState);

    const navigate = useNavigate();

    const handleChange = event => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });

    };
    useEffect(() => {
        if (currentUser) {
            setState(initialState);
            navigate('/');
        }
    }, [currentUser, initialState, navigate,dispatch]);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(emailSignInStart({email, password}));

    }

    const handleGoogle = async e => {
        e.preventDefault();
        dispatch(googleSignInStart());
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