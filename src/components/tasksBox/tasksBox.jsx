import React, { Component } from 'react';
import {string, func, bool, array} from 'prop-types';
import {Task, TaskEdit} from "../../elements";
import {arrayTasks, searchTasks} from "../../dataDefault/arrayTasks";
import withRouter from "react-router/es/withRouter";
import './tasksBox.css';

export class TasksBoxContainer extends Component {
    render () {
        const {category, task} = this.props.match.params;

        return (
            <div className='TasksBox'>
                {task ?
                    <TaskEdit/>
                    :
                    searchTasks(arrayTasks,category).map((item,i)=><Task name={item.name} key={i}/>)
                }

            </div>
        );
    };
}
export const TasksBox = withRouter(TasksBoxContainer);