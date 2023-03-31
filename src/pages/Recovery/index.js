import { useEffect, useMemo, useState } from "react";
import Button from "../../components/Forms/Button";
import FormInput from "../../components/Forms/FormInput";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { resetPassword,resetAllAuthForms } from "../../redux/User/user.actions";

const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    resetPasswordError: user.resetPasswordError
});

const Recovery = () => {
    const { resetPasswordSuccess, resetPasswordError } = useSelector(mapState);
    const initialState = useMemo (() => {
        return {
            email: '',
            error: ''
        }
    },[]);
    const navigate = useNavigate();
    const [state, setState] = useState(initialState);
    const { email, error } = state;
    const dispatch = useDispatch();

    useEffect(() => {
        if (resetPasswordSuccess) {
            setState(initialState);
            dispatch(resetAllAuthForms());
            navigate('/');
        }
    }, [resetPasswordSuccess,initialState,navigate,dispatch])

    useEffect(() => {
        if (Array.isArray(resetPasswordError) && resetPasswordError.length > 0) {
            setState({ ...state, error: resetPasswordError });
        }

    }, [resetPasswordError,state])

    const handleChange = event => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });

    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(resetPassword({ email }));
    }
    return (
        <form onSubmit={handleSubmit}>
            {error.length > 0 && (
                <ul>
                    {
                        error.map((err, index) => (
                            <li key={index}>{err}</li>
                        ))
                    }
                </ul>
            )}
            <FormInput
                type='email'
                name='email'
                value={email}
                placeholder='Email'
                onChange={handleChange}
            />
            <Button type='submit'>Send email</Button>
        </form>
    );
};

export default Recovery;