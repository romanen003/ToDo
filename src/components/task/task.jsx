import React, { Component } from 'react';
import {withRouter} from "react-router";
import {Button, Checkbox} from "../../elements/index";
import {string, func } from 'prop-types';

import './task.css';
import '../../elements/style.css';


export class TaskContainer extends Component {
    static propTypes = {
        onTaskEditClick: func,
        name: string
    };
    static defaultProps = {
        onTaskEditClick: () => {}
    };

    constructor (props) {
       super(props);
        this.containerRef = React.createRef();
        this.btnEditRef = React.createRef();
        this.checkboxRef = React.createRef();
    } ;


    handleSelectTaskClick = (event) => {
        if (this.containerRef.current === event.target) {
            const newURL = `/${this.props.item.id}`;

            this.props.history.push(newURL);
        }
    };

    handleEditClick = (event) => {
        if (this.btnEditRef.current.btnRef.current === event.target) {
            const newURL = `/${this.props.item.id}/edit`;

            this.props.history.push(newURL);
        }
    };

    handleStatusChange = (status) => {
        const { item, updateTask} = this.props;
        updateTask({...item,status})
    };

    render () {
        const { name, status } = this.props.item;

        return (
            <div className='Task'
                 onClick={this.handleSelectTaskClick}
                 ref={this.containerRef}
            >
                <div className="Task__status">
                    <Checkbox handleStatusChange={this.handleStatusChange} checked={status} ref={this.checkboxRef}/>
                </div>
                <div className="Task__title">{name}</div>
                <div className="Task__edit">
                    <Button className="edit" onClick={this.handleEditClick} ref={this.btnEditRef}/>
                </div>
            </div>
        );
    };
}

export const Task = withRouter(TaskContainer);