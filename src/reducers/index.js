import {combineReducers} from "redux";
import {tasks} from './tasks/tasks';
import {category} from './category/category';
import {activeState} from './category-state/activeState';

export const rootReducer = combineReducers({
    tasks,
    category,
    activeState
});