import React from 'react';
import ReactDOM from 'react-dom';
import {Todo, TodoContainer} from "./components";
import {arrayTasks} from './dataDefault/arrayTasks';
import { BrowserRouter, Link, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

ReactDOM.render(
        <TodoContainer
            defaultData={arrayTasks}
        />,
    document.getElementById('root')
);
