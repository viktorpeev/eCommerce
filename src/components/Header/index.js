import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import Logo from './../../assets/baal.png';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';

const Header = (props) => {

    const dispatch = useDispatch();
    const mapState = ({ user }) => ({
        currentUser: user.currentUser
    });

    const { currentUser } = useSelector(mapState);

    const logOut = () => {
        dispatch(signOutUserStart());
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
                    <div>
                        <Link to='/'>
                            Home
                        </Link>
                        <Link to='/search'>
                            Search
                        </Link>
                    </div>

                    {currentUser && (
                        <>
                            <Link to='/dashboard'>
                                My Account
                            </Link>
                            <p onClick={logOut}>
                                Logout
                            </p>
                        </>

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
