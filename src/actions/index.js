import { createAction } from 'redux-actions';

export const addBoard = createAction('BOARD_ADD');
export const addList = createAction('LIST_ADD');
export const addTask = createAction('TASK_ADD');
export const updateTaskState = createAction('UPDATE_TASK_STATE');