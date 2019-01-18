import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {updateTask} from "../../actions/actionTask";

import TaskContainer from '../task/taskContainer';

import './tasksBox.css';


export class TasksBoxContainer extends Component {

    filterData = () => {
        const {
            match: { params: { id, category }, url},
            tasks
        } = this.props;

        if(Boolean(url.includes('alldone'))){
            return tasks.filter(item => item.parentCategory === (Number(category) || null) && item.status === true )
        }
        if(Boolean(url.includes('category'))){
            return tasks.filter(item => item.parentCategory === Number(category))
        }
        if (Boolean(url.includes('task'))){
            return tasks.filter(item => item.id === Number(id))
        }
        return tasks.filter(item => item.parentCategory === null )
    };

    render () {
        const { updateTask } = this.props;
        const filterTask = this.filterData();

        return (
            <div className='TasksBox'>
                {filterTask.map(item => <TaskContainer item={item} key={item.id} updateTask={updateTask}/>)}
            </div>
        );
    };
}

export const TasksBox = connect(state => ({tasks: state.tasks}),{updateTask})(TasksBoxContainer);
