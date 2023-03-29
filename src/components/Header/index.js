import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utilis';
import Logo from './../../assets/baal.png';
import { connect } from 'react-redux';

const Header = (props) => {
    const { currentUser } = props;

    const logOut = () => {

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

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

export default connect(mapStateToProps, null)(Header);
