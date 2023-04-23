import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import Logo from './../../assets/baal.png';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
});

const Header = (props) => {

    const dispatch = useDispatch();
    const { currentUser, totalNumCartItems } = useSelector(mapState);

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
                        <Link to='/cart'>
                            Your cart ({totalNumCartItems})
                        </Link>
                    </div>
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
