import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({children, onClick, className, ...attrs}) => {
    const classes = classNames(
        'button',
        className,
    );
    const Tag = attrs.href ? 'a' : 'button';
    
    return (
        <Tag {...attrs} onClick={onClick} className={classes}>
            {children}
        </Tag>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

Button.defaultProps = {
    children: 'Button',
    onClick: () => {},
    className: '',
};

export default Button;