import React from 'react';
import ReactDOM from 'react-dom';
import {Todo, TodoContainer} from "./components";
import {arrayTasks} from './dataDefault/arrayTasks';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


ReactDOM.render(

        <TodoContainer defaultData={arrayTasks}/>
,
        document.getElementById('root')
);
