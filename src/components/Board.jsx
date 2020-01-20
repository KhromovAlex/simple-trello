import React, { Fragment } from 'react';
import BoardTitle from './BoardTitle';
import AddList from './AddList';
import ListBlock from './ListBlock';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import './Board.scss';

const Board = (props) => {
    const handleNewList = (newList) => {
        const { handleNewList } = props;
        handleNewList(newList);
    }

    const { title, tasks, handleNewTask, lists } = props;

    return (
        <>
            <BoardTitle title={title} />
            <ul className="board-component">
                <li className="list-block list-block_button">
                    <AddList boardName={title} handleNewList={handleNewList} />
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
};

export default Board;