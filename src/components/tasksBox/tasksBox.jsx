import React, { Component } from 'react';
import { Task } from "../../elements";
import connect from "react-redux/es/connect/connect";

import './tasksBox.css';
import {updateTask} from "../../actions/actionTask";

export class TasksBoxContainer extends Component {
    render () {
        const {
            match: {params: {category, task}},
            tasks,
            updateTask
        } = this.props;
        const value = task ?  task : category || null;
        const filterTask = task ?
            tasks.filter(item => item.id === value)
            :
            tasks.filter(item => item.parentCategory === value );
        
        return (
            <div className='TasksBox'>
                {filterTask.map(item => <Task item={item} key={item.id} updateTask={updateTask}/>)}
            </div>
        );
    };
}

export const TasksBox = connect(state => ({tasks: state.tasks}),{updateTask})(TasksBoxContainer);
