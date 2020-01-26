import { handleActions } from 'redux-actions';
import { addBoard } from './../actions';

const boards = handleActions(
    {
        [addBoard]: (state, { payload }) => {
            return {...state, [payload.id]: payload}
        },
    },
    {}
);

export default boards;