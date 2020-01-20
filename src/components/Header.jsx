import React from 'react';
import Logo from './Logo';
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
            <Logo className="header__logo-text">Simple Trello</Logo>
        </header>
    );
};

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;