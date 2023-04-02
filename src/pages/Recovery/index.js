import { useEffect, useMemo, useState } from "react";
import Button from "../../components/Forms/Button";
import FormInput from "../../components/Forms/FormInput";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordStart, resetUserState } from "../../redux/User/user.actions";

const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    userErr: user.userErr,
});

const Recovery = () => {
    const { resetPasswordSuccess, userErr } = useSelector(mapState);
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
            dispatch(resetUserState());
            navigate('/');
        }
    }, [resetPasswordSuccess,initialState,navigate,dispatch])

    useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0) {
            setState({ ...state, error: userErr });
        }

    }, [userErr,state])

    const handleChange = event => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });

    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(resetPasswordStart({ email }));
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