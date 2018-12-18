import React from 'react';
import ReactDOM from 'react-dom';
import {TodoContainer} from "./components";
import {arrayTasks} from './dataDefault/arrayTasks';

ReactDOM.render(
    <TodoContainer
        defaultData={arrayTasks}
    />,
    document.getElementById('root')
);
