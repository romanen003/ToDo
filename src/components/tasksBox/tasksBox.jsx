import React, { Component } from 'react';
import { Task } from "../../elements";
import connect from "react-redux/es/connect/connect";

import './tasksBox.css';

export class TasksBoxContainer extends Component {
    render () {
        const {
            match: {params: {category}},
            tasks
        } = this.props;
        const filterTask = tasks.filter(item => item.parentCategory === category);

        return (
            <div className='TasksBox'>
                {filterTask.map((item,i)=><Task name={item.name} key={i}/>)}
            </div>
        );
    };
}

export const TasksBox = connect(state => ({tasks: state.tasks}))(TasksBoxContainer);
