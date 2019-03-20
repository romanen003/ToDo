import {Task} from "../../utils/task-class";
import {DEFAULT_TASKS, ACTION_TASK} from './constants';
import {deleteTasks} from "../../utils";


export const TASKS = DEFAULT_TASKS.map(task => new Task(task));

export const tasks = (state = TASKS, {type,payload: item}) => {
    switch (type) {
        case ACTION_TASK.ADD:
            return [
                ...state,
                new Task(item)
            ];
        case ACTION_TASK.UPDATE :
            return [
                ...state.map(task => task.id !== item.id ? task : item),
            ];
        case ACTION_TASK.DELETE_CATEGORYS_TASKS :
            return deleteTasks(state,item);
        default:
            return state;
    }
};