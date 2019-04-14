import {ACTION_TASK} from '../../reducers/tasks/constants';


export const addTask = item => ({
    type: ACTION_TASK.ADD,
    payload: item
});

export const updateTask = item => ({
    type: ACTION_TASK.UPDATE,
    payload: item
});

export const deleteTask = item => ({
    type: ACTION_TASK.DELETE_TASK,
    payload: item
});
