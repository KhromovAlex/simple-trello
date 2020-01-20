import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

const ListTasks = (props) => {
    const { tasks, handleUpdateTaskState } = props;
    return (
        tasks.length ?
        <ul>
            {
                tasks.map((task) => (
                    <Task
                        state={task.state}
                        key={uniqueId()}
                        handleUpdateTaskState={handleUpdateTaskState}
                        id={task.id}
                    >
                        {task.name}
                    </Task>
                ))
            }
        </ul>
        : null
    );
};

ListTasks.propTypes = {
    tasks: PropTypes.array,
    handleUpdateTaskState: PropTypes.func.isRequired,
};

ListTasks.defaultProps = {
    tasks: [],
};

export default ListTasks;