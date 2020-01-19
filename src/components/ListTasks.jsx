import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

const ListTasks = (props) => {
    const { tasks } = props;
    return (
        tasks.length ?
        <ul>
            {
                tasks.map((task) => (
                    <Task state={task.state} key={uniqueId()}>{task.name}</Task>
                ))
            }
        </ul>
        : null
    );
};

ListTasks.propTypes = {
    tasks: PropTypes.array,
};

ListTasks.defaultProps = {
    tasks: [],
};

export default ListTasks;