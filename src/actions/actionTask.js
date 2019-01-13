import {ACTION_TASK} from '../constants/index';


export const addTask = item => ({type: ACTION_TASK.ADD, payload: item });

export const updateTask = item => ({type: ACTION_TASK.UPDATE, payload: item });