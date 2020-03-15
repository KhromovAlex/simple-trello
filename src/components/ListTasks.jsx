import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Task from './Task';

import './ListTasks.scss';

import { updateTaskState, DnDTaskOneList, DnDTaskBetweenLists } from './../actions';

class ListTasks extends React.Component {
    static propTypes = {
        listId: PropTypes.string.isRequired,
        handleDrop: PropTypes.func.isRequired,
        handleDragOver: PropTypes.func.isRequired,
    }

    handleUpdateTaskState = (id) => () => {
        const { updateTaskState } = this.props;
        updateTaskState(id);
    }

    handleDragStart = (id) => (e) => {
        const { tasks } = this.props;
        const task = JSON.stringify(tasks.find((task) => task.id === id));
        e.dataTransfer.effectAllowed='move';
        e.dataTransfer.setData("Task", task);
    }

    render() {
        const {
            tasks,
            handleDrop,
            handleDragOver,
        } = this.props;

        return (
            tasks.length > 0 &&
            <ul className="list-tasks">
                {
                    tasks.map((task) => (
                        <Task
                            state={task.state}
                            key={task.id}
                            handleUpdateTaskState={this.handleUpdateTaskState}
                            id={task.id}
                            handleDragStart={this.handleDragStart}
                            handleDragOver={handleDragOver}
                            handleDrop={handleDrop}
                        >
                            {task.name}
                        </Task>
                    ))
                }
            </ul>
        );
    }
};

const mapStateToProp = (state, ownProps) => ({
    tasks: Object.values(state.tasks).filter((task) => task.listId === ownProps.listId)
});

export default connect(mapStateToProp, { updateTaskState, DnDTaskOneList, DnDTaskBetweenLists })(ListTasks);