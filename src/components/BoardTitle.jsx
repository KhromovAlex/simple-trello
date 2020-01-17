import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import './BoardTitle.scss';

const BoardTitle = (props) => {
    const { text, className } = props;
    const classTitle = ClassNames(
        "board-title",
        className
    );
    return (
        <h2 className={classTitle}>{text}</h2>
    );
};

BoardTitle.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default BoardTitle;