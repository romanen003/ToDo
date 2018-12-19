import React, { Component } from 'react';
import {string, func, bool, array} from 'prop-types';
import {Task} from "../../elements";
import './tasksBox.css';

export class TasksBox extends Component {
    render () {
        const {
            showTasks
        } = this.props;

        return (
            <div className='TasksBox'>
                {showTasks && showTasks.map((item,i)=><Task name={item.name} key={i}/>)}
            </div>
        );
    };
}