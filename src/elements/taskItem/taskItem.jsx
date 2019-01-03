import React, { Component } from 'react';
import {string, func } from 'prop-types';
import {Button, Checkbox} from "..";
import './taskItem.css';
import '../style.css';
import {withRouter} from "react-router";

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
    } ;


    handleSelectTaskClick = (event) => {
        if (this.containerRef.current === event.target) {
            const newURL = `/${this.props.name}`;

            this.props.history.push(newURL);
        }
    };

    handleEditClick = (event) => {
        if (this.btnEditRef.current.btnRef.current === event.target) {
            const newURL = `/${this.props.name}/edit`;

            this.props.history.push(newURL);
        }
    };

    render () {
        const {
            onTaskEditClick,
            name
        } = this.props;

        return (
            <div className='Task'
                 onClick={this.handleSelectTaskClick}
                 ref={this.containerRef}
            >
                <div className="Task__status">
                    <Checkbox/>
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