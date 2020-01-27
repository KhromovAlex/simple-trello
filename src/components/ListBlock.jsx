import React from 'react';
import { connect } from 'react-redux';
import ListTitle from './ListTitle';
import InputByPress from './InputByPress';
import Button from './Button';
import ListTasks from './ListTasks';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { uniqueId } from 'lodash';
import { addTask, DnDTaskOneList, DnDTaskBetweenLists, removeList } from './../actions';

class ListBlock extends React.Component {
    static propTypes = {
        listId: PropTypes.string.isRequired,
        boardId: PropTypes.string.isRequired,
        className: PropTypes.string,
    }

    handleNewTask = (name) => {
        const { addTask, listId, boardId } = this.props;
        const newTask = {
            name,
            state: 'active',
            listId,
            boardId,
            id: uniqueId(),
        };

        addTask(newTask);
    }

    handleDragOver = (e) => {
        e.preventDefault();
    }

    handleDrop = (id) => (e) => {
        e.stopPropagation();
        const target = e.target.closest('li');
        const { tasks, DnDTaskOneList, DnDTaskBetweenLists } = this.props;
        const taskDrag = JSON.parse(e.dataTransfer.getData('Task'));

        if(target.classList.contains('task-component')) {
            const taskDrop = tasks.find((task) => task.id === id);
            if(taskDrag.listId !== taskDrop.listId) {
                DnDTaskBetweenLists({ taskDrag, listId: taskDrop.listId});
            }
            if(taskDrag.id !== id) {
                DnDTaskOneList({ idDrag: taskDrag.id, idDrop: id });
            }
        } else {
            if(taskDrag.listId !== id) {
                DnDTaskBetweenLists({ taskDrag, listId: id});
            }
        }
    }
    
    handleRemoveList = () => {
        const { removeList, listId: id } = this.props;
        removeList({ id });
    }

    render() {
        const { list, className } = this.props;
        const classListBlock = ClassNames(
            className
        );

        return (
            <li
                onDragOver={this.handleDragOver}
                onDrop={this.handleDrop(list.id)}
                className={classListBlock}
            >
                <Button onClick={ this.handleRemoveList } className="button_round button_absolute_top">X</Button>
                <ListTitle title={list.name} />
                <InputByPress handleInput={this.handleNewTask} />
                <ListTasks
                    listId={list.id}
                    handleDrop={this.handleDrop}
                    handleDragOver={this.handleDragOver}
                />
            </li>
        );
    }
};

const mapStateToProp = (state, ownProps) => ({
    tasks: Object.values(state.tasks).filter((task) => task.listId === ownProps.listId && task.boardId === ownProps.boardId),
    list: Object.values(state.lists).filter((list) => list.id === ownProps.listId && list.boardId === ownProps.boardId)[0]
});

export default connect(mapStateToProp, { addTask, DnDTaskOneList, DnDTaskBetweenLists, removeList })(ListBlock);