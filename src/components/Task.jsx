import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './Task.scss';

const Task = (props) => {
    const { children, state } = props;
    const classTask = ClassNames({
        'task-component': true,
        'active-task': state === 'active',
        'finished-task': state === 'finished',
    });
    return (
        <li className={classTask}>
            <span className="task-component__text">{children}</span>
            <Button className="button_task">{state === 'active' ? 'V' : 'X'}</Button>
        </li>
    );
};

Task.propTypes = {
    children: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
};

export default Task;