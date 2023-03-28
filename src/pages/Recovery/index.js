import { useState } from "react";
import Button from "../../components/Forms/Button";
import FormInput from "../../components/Forms/FormInput";
import { auth } from "../../firebase/utilis";
import { useNavigate } from 'react-router-dom';
const Recovery = () => {

    const initialState = {
        email: '',
        error: ''
    }
    const navigate = useNavigate();
    const [state, setState] = useState(initialState);
    const { email, error } = state;

    const handleChange = event => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });

    };

    const handleSubmit = async event => {
        event.preventDefault();


        try {
            const config = {
                url: 'http://localhost:3000/login'
                //TODO: da dobavq url na proekta sled kato go hostna
            }

            await auth.sendPasswordResetEmail(email, config)
                .then(() => {
                    navigate('/login');
                })
                .catch(() => {
                    const err = ['Email does not exist'];

                    setState({ ...state, error: err })
                })

        } catch (err) {
            //console.log(err)
        }
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