import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import './InputByPress.scss';

const InputByPress = props => {
    const handlePressEnter = (e) => {
        if(e.key !== 'Enter' || e.target.value.trim() === '') return;
        props.handleInput(e.target.value);
        e.target.value = '';
    }

    const { label, placeholder, type, value, className } = props;
    const inputClass = ClassNames(
        "input-by-press",
        className
    );

    return (
        <label>
            <input
                onKeyPress={handlePressEnter}
                className={inputClass}
                placeholder={placeholder}
                type={type}
                defaultValue={value}
            />
            { label ? <span>{label}</span> : null }
        </label>
    );
};

InputByPress.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    handleInput: PropTypes.func.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
};

InputByPress.defaultProps = {
    type: 'text',
    value: '',
    className: '',
};

export default React.memo(InputByPress);