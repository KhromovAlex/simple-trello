import { handleActions } from 'redux-actions';

import { addList, removeList, removeBoard } from './../actions';

const lists = handleActions(
    {
        [addList]: (state, { payload }) => {
            return {...state, [payload.id]: payload}
        },
        [removeList]: (state, { payload }) => {
            const newState = {...state};
            delete newState[payload.id];
            return newState;
        },
        [removeBoard]: (state, { payload }) => {
            const filtedListsArray = Object.values(state).filter((list) => list.boardId !== payload.id);
            const newState = filtedListsArray.reduce((acc, currentVal) => (
                {
                    ...acc,
                    [currentVal.id]: currentVal
                }
            ), {});
            return newState;
        },
    },
    {}
);

export default lists;