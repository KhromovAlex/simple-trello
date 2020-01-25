import React from 'react';
import { connect } from 'react-redux';
import ListTitle from './ListTitle';
import InputByPress from './InputByPress';
import ListTasks from './ListTasks';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { uniqueId } from 'lodash';
import { addTask } from './../actions';

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

    render() {
        const { list, className } = this.props;
        const classListBlock = ClassNames(
            className
        );

        return (
            <li className={classListBlock}>
                <ListTitle title={list.name} />
                <InputByPress handleInput={this.handleNewTask} />
                <ListTasks
                    listId={list.id}
                />
            </li>
        );
    }
};

const mapStateToProp = (state, ownProps) => ({
    tasks: Object.values(state.tasks),
    list: Object.values(state.lists).filter((list) => list.id === ownProps.listId && list.boardId === ownProps.boardId)[0]
});

export default connect(mapStateToProp, { addTask })(ListBlock);