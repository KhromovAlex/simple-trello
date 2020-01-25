import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addBoard, addList, addTask, updateTaskState } from './../actions';

const boards = handleActions(
    {
        [addBoard]: (state, { payload }) => {
            return {...state, [payload.id]: payload}
        },
    },
    {}
);

const lists = handleActions(
    {
        [addList]: (state, { payload }) => {
            return {...state, [payload.id]: payload}
        },
    },
    {}
);

const tasks = handleActions(
    {
        [addTask]: (state, { payload }) => {
            return {...state, [payload.id]: payload}
        },
        [updateTaskState]: (state, { payload }) => {
            const newState = {...state};
            newState[payload].state = newState[payload].state === 'active' ? 'finished' : 'active';
            return newState;
        },
    },
    {}
);

export default combineReducers({
    boards,
    lists,
    tasks,
  });