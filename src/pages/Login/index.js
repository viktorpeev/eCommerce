import Button from "../../components/Forms/Button";
import { signInWithGoogle } from "../../firebase/utilis";

const Login = (props) => {

    const handleSubmit = async e =>{
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        </form>
    );
};

export default Login;