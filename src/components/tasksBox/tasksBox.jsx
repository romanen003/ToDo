import React, { Component } from 'react';
import { Task } from "../../elements";
import connect from "react-redux/es/connect/connect";

import './tasksBox.css';

export class TasksBoxContainer extends Component {
    render () {
        const {
            match: {params: {category, task}},
            tasks
        } = this.props;
        const value = task ?  task: category || null;
        const filterTask = task ?
            tasks.filter(item => item.name === value)
            :
            tasks.filter(item => item.parentCategory === value );
        
        return (
            <div className='TasksBox'>
                {filterTask.map((item,i)=><Task name={item.name} key={i}/>)}
            </div>
        );
    };
}

export const TasksBox = connect(state => ({tasks: state.tasks}))(TasksBoxContainer);
