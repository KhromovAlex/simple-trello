import React from 'react';
import PropTypes from 'prop-types';
import {uniqueId} from 'lodash';

const ListTasks = (props) => {
    const { tasks } = props;
    return (
        tasks.length ?
        <ul>
            {
                tasks.map((task) => (
                    <li key={uniqueId()}>{task.text}</li>
                ))
            }
        </ul>
        : null
    );
};

ListTasks.propTypes = {
    tasks: PropTypes.array,
};

export default ListTasks;