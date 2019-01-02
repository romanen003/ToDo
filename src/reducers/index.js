import { combineReducers } from "redux";
import { tasks } from '../reducers/tasks';

export const rootReducer = combineReducers({ tasks });