import { combineReducers } from "redux";
import { tasks } from '../reducers/tasks';
import { category } from '../reducers/category';
import {activeState} from './activeState';

export const rootReducer = combineReducers({ tasks, category, activeState });