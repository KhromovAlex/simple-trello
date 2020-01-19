import React from 'react';
import BoardTitle from './BoardTitle';
import AddList from './AddList';
import ListBlock from './ListBlock';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

const Board = (props) => {
    const handleNewList = (newList) => {
        const { handleNewList } = props;
        handleNewList(newList);
    }

    const { title, tasks, handleNewTask, lists } = props;

    return (
        <>
            <BoardTitle title={title} />
            {
                lists.length ?
                <ul>
                    {
                        lists.map((list) => (
                            <li key={uniqueId()}>
                                <ListBlock
                                    handleNewTask={handleNewTask}
                                    list={list}
                                    tasks={tasks}
                                />
                            </li>
                        ))
                    }
                </ul>
                : null
            }
            <AddList boardName={title} handleNewList={handleNewList} />
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