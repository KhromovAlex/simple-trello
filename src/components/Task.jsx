import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './Task.scss';

const Task = (props) => {
    const { children, state } = props;
    const classTask = ClassNames({
        activeTask: state === 'active',
        finishedTask: state === 'finished',
    });
    return (
        <li className={classTask}>
            {children}
        </li>
    );
};

Task.propTypes = {
    children: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
};

export default Task;