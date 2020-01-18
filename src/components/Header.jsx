import React from 'react';
import Logo from './Logo';
import svgIcon from './../img/freebsd.svg';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <Logo>
                <img className="header__img" src={svgIcon} alt="logo" />
            </Logo>
        </header>
    );
};

export default Header;