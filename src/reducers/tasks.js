import { handleActions } from 'redux-actions';
import { addTask, updateTaskState, DnDTaskOneList, DnDTaskBetweenLists } from './../actions';

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
        [DnDTaskOneList]: (state, { payload: {idDrag, idDrop} }) => {
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
        [DnDTaskBetweenLists]: (state, { payload: {taskDrag, listId} }) => {
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