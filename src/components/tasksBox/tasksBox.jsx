import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {updateTask} from "../../actions/actionTask";

import TaskContainer from '../task/taskContainer';

import './tasksBox.css';


export class TasksBoxContainer extends Component {

    filterdata = () => {
        const {
            match: {params, params: {category, task}, url},
            tasks
        } = this.props;

        switch (true) {
            case Boolean(url === "/alldone"):
                return tasks.filter(item => item.status === true);
            case Boolean(params.task):
                return tasks.filter(item => item.id === task);
            case Boolean(params.category):
                return tasks.filter(item => item.parentCategory === category );
            default:
                return tasks.filter(item => item.parentCategory === null );
        }
    };

    render () {
        const { updateTask } = this.props;
       const filterTask = this.filterdata();

        return (
            <div className='TasksBox'>
                {filterTask.map(item => <TaskContainer item={item} key={item.id} updateTask={updateTask}/>)}
            </div>
        );
    };
}

export const TasksBox = connect(state => ({tasks: state.tasks}),{updateTask})(TasksBoxContainer);
