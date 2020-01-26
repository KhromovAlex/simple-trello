import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import './Task.scss';

const Task = (props) => {
    const {
        children,
        state,
        id,
        handleUpdateTaskState,
        handleDrop,
        handleDragOver,
        handleDragStart
    } = props;
    const classTask = ClassNames({
        'task-component': true,
        'active-task': state === 'active',
        'finished-task': state === 'finished',
    });

    return (
        <li
            className={classTask}
            draggable={ true }
            onDragStart={handleDragStart(id)}
            onDragOver={handleDragOver}
            onDrop={handleDrop(id)}
        >
            <span className="task-component__text">{children}</span>
            <Button
                onClick={handleUpdateTaskState(id)}
                className="button_task"
            >
                {state === 'active' ? 'V' : 'X'}
            </Button>
        </li>
    );
};

Task.propTypes = {
    children: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleUpdateTaskState: PropTypes.func.isRequired,
    handleDragStart: PropTypes.func.isRequired,
    handleDragOver: PropTypes.func.isRequired,
    handleDrop: PropTypes.func.isRequired,
};

export default Task;