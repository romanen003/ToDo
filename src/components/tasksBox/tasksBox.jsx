import React, { Component } from 'react';
import {} from 'prop-types';
import {Task, TaskEdit} from "../../elements";
import withRouter from "react-router/es/withRouter";
import './tasksBox.css';
import {dataTodo} from "../../dataDefault/data";

export class TasksBoxContainer extends Component {
    render () {
        const {category, task} = this.props.match.params;
        const filterData = task ?
            dataTodo.filter((item)=> item.type === 'task' && item.name === task)
            :
            dataTodo.filter((item)=>item.type === 'task' && item.parentCategory === category)
        ;

        return (
            <div className='TasksBox'>
                {task && task ?
                    <TaskEdit data={filterData[0]}/>
                    :
                    filterData.map((item,i)=><Task name={item.name} key={i}/>)
                }

            </div>
        );
    };
}
export const TasksBox = withRouter(TasksBoxContainer);