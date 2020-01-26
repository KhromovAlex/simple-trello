import { handleActions } from 'redux-actions';
import { addList } from './../actions';

const lists = handleActions(
    {
        [addList]: (state, { payload }) => {
            return {...state, [payload.id]: payload}
        },
    },
    {}
);

export default lists;