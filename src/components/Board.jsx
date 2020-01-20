import React, { Fragment } from 'react';
import BoardTitle from './BoardTitle';
import AddList from './AddList';
import ListBlock from './ListBlock';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import './Board.scss';

const Board = (props) => {
    const { title, tasks, handleNewTask, lists, handleNewList, id } = props;

    return (
        <>
            <BoardTitle title={title} />
            <ul className="board-component">
                <li className="list-block list-block_button">
                    <AddList boardId={id} handleNewList={handleNewList} />
                </li>
                {
                    lists.length ?
                        lists.map((list) => (
                            <Fragment key={uniqueId()}>
                                <ListBlock
                                    handleNewTask={handleNewTask}
                                    list={list}
                                    tasks={tasks}
                                    className="list-block"
                                />
                            </Fragment>
                        ))
                    : null
                }
            </ul>
        </>
    );
};

Board.propTypes = {
    title: PropTypes.string.isRequired,
    handleNewTask: PropTypes.func.isRequired,
    handleNewList: PropTypes.func.isRequired,
    lists: PropTypes.array.isRequired,
    tasks: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
};

export default Board;