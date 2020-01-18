import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Logo = (props) => {
    return (
        <Link to="/">{props.children}</Link>
    );
};

Logo.propTypes = {
    children: PropTypes.node.isRequired
};

export default Logo;