import { combineReducers } from "redux";
import { tasks } from '../reducers/tasks';
import { category } from '../reducers/category';

export const rootReducer = combineReducers({ tasks, category });