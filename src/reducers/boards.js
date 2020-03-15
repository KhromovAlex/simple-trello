import { handleActions } from 'redux-actions';

import { addBoard, removeBoard } from './../actions';

const boards = handleActions(
    {
        [addBoard]: (state, { payload }) => {
            return {...state, [payload.id]: payload}
        },
        [removeBoard]: (state, { payload }) => {
            const newState = {...state};
            delete newState[payload.id];
            return newState;
        },
    },
    {}
);

export default boards;