import React, { Component } from 'react';
import {Task, TaskEdit} from "../../elements";
import withRouter from "react-router/es/withRouter";
import './tasksBox.css';
import {dataTodo} from "../../store/data";

export class TasksBoxContainer extends Component {
    render () {
        const {category, task} = this.props.match.params;
        const tasks = dataTodo.filter((item)=>item.type === 'task');
        const filterData = tasks.filter((item)=> task ?
            item.name === task : item.parentCategory === category);

        return (
            <div className='TasksBox'>
                {task ?
                    <TaskEdit data={filterData[0]}/>
                    :
                    filterData.map((item,i)=><Task name={item.name} key={i}/>)
                }
            </div>
        );
    };
};
export const TasksBox = withRouter(TasksBoxContainer);
