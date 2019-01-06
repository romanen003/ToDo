import React, { Component } from 'react';
import { Task } from "../../elements";
import connect from "react-redux/es/connect/connect";

import './tasksBox.css';
import {updateTask} from "../../actions/actionTask";

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
       console.log(filterTask,this.props.match);

        return (
            <div className='TasksBox'>
                {filterTask.map(item => <Task item={item} key={item.id} updateTask={updateTask}/>)}
            </div>
        );
    };
}

export const TasksBox = connect(state => ({tasks: state.tasks}),{updateTask})(TasksBoxContainer);
