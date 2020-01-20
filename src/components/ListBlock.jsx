import React from 'react';
import ListTitle from './ListTitle';
import InputByPress from './InputByPress';
import ListTasks from './ListTasks';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { uniqueId } from 'lodash';

const ListBlock = (props) => {
    const handleNewTask = (name) => {
        const { list: {listId, boardId}, handleNewTask } = props;
        const newTask = {
            name,
            state: 'active',
            listId,
            boardId,
            id: uniqueId(),
        };

        handleNewTask(newTask);
    }

    const { list, className, tasks } = props;
    const classListBlock = ClassNames(
        className
    );

    return (
        <li className={classListBlock}>
            <ListTitle title={list.listName} />
            <InputByPress handleInput={handleNewTask} />
            <ListTasks tasks={tasks.filter((task) => task.listId === list.listId)} />
        </li>
    );
};

ListBlock.propTypes = {
    list: PropTypes.object.isRequired,
    handleNewTask: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default ListBlock;