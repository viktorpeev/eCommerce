import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utilis';
import Logo from './../../assets/baal.png';

const Header = (props) => {
    const { currentUser } = props;


    const logOut =()=>{
        auth.signOut();
        window.location.reload(false);
    }
    return (
        <header className='header'>
            <div className='wrap'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={Logo} alt='logo' />
                    </Link>
                </div>
                <div className='actions'>
                    {currentUser && (
                        <p onClick={logOut}>
                            Logout
                        </p>
                    )}
                    {!currentUser && (
                        <>
                            <Link to='/login'>
                                Sing In
                            </Link>
                            <Link to='/registration'>
                                Registration
                            </Link>
                        </>
                    )}

                </div>
            </div>
        </header>
    );
};

Header.defaultProps = {
    currentUser: null
};

export default Header;
