import React from 'react';
import Logo from './Logo';
import svgIcon from './../img/freebsd.svg';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import './Header.scss';

const Header = (props) => {
    const classHeader = ClassNames(
        "header",
        props.className
    );
    
    return (
        <header className={classHeader}>
            <Logo>
                <img className="header__img" src={svgIcon} alt="logo" />
            </Logo>
        </header>
    );
};

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;