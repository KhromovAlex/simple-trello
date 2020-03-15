import { handleActions } from 'redux-actions';

import * as actions from './../actions';

const tasks = handleActions(
    {
        [actions.addTask]: (state, { payload }) => {
            return {...state, [payload.id]: payload}
        },
        [actions.removeTask]: (state, { payload }) => {
            const newState = {...state};
            delete newState[payload.id];
            return newState;
        },
        [actions.removeList]: (state, { payload }) => {
            const filtedTasksArray = Object.values(state).filter((task) => task.listId !== payload.id);
            const newState = filtedTasksArray.reduce((acc, currentVal) => (
                {
                    ...acc,
                    [currentVal.id]: currentVal
                }
            ), {});
            return newState;
        },
        [actions.removeBoard]: (state, { payload }) => {
            const filtedTasksArray = Object.values(state).filter((task) => task.boardId !== payload.id);
            const newState = filtedTasksArray.reduce((acc, currentVal) => (
                {
                    ...acc,
                    [currentVal.id]: currentVal
                }
            ), {});
            return newState;
        },
        [actions.updateTaskState]: (state, { payload }) => {
            const newState = {...state};
            newState[payload].state = newState[payload].state === 'active' ? 'finished' : 'active';
            
            return newState;
        },
        [actions.DnDTaskOneList]: (state, { payload: {idDrag, idDrop} }) => {
            const dragTask = state[idDrag];
            const dropTask = state[idDrop];
            dragTask.id = idDrop;
            dropTask.id = idDrag;

            return {
                ...state,
                [idDrag]: dropTask,
                [idDrop]: dragTask,
            };
        },
        [actions.DnDTaskBetweenLists]: (state, { payload: {taskDrag, listId} }) => {
            const task = state[taskDrag.id];
            task.listId = listId;

            return {
                ...state,
                [task.id]: task,
            };
        },
    },
    {}
);

export default tasks;