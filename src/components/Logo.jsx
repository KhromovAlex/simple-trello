import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { Link } from 'react-router-dom';

const Logo = (props) => {
    const classLogo = ClassNames(
        "header__logo",
        props.className,
    );

    return (
        <Link className={classLogo} to="/">{props.children}</Link>
    );
};

Logo.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Logo;