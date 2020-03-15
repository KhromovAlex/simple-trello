import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

import './BoardTitle.scss';

const BoardTitle = props => {
    const { title, className } = props;
    const classTitle = ClassNames(
        "board-title",
        className
    );
    return (
        <h2 className={classTitle}>{title}</h2>
    );
};

BoardTitle.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default React.memo(BoardTitle);