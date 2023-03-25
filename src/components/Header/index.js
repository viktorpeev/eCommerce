import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

import Logo from './../../assets/baal.png';

const Header = (props) => {
    return (
        <header className='header'>
            <div className='wrap'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={Logo} alt='logo' />
                    </Link>
                </div>
                <div className='actions'>
                    <Link to='/registration'>
                        Registration
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
