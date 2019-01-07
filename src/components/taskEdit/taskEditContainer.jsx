import React, { Component } from 'react';
import { } from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {updateTask} from "../../actions/actionTask";
import { withRouter } from "react-router";

import {TaskEdit} from "../index";


class TaskEditContainer extends Component {
    static propTypes = {

    };
    static defaultProps = {

    };
    constructor (props) {
        super(props);
        const {
            tasks,
            match: {params: {task}}
        } = this.props;

        this.currentTask = tasks.filter(item => item.id === task)[0];
        this.state = {
            name: this.currentTask.name,
            description: this.currentTask.description,
            status: this.currentTask.status
        };
    };

    handleNameChange = (name) => {
        this.setState(() => ({
            name
        }));
    };

    handleStatusChange = (status) => {
        this.setState(() => ({
            status
        }));
    };

    handleDescriptionChange = (description) => {
        this.setState(() => ({
            description
        }));
    };

    handleCancelledClick = () => {
        const {
            history,
            match: {params:{task}}
        } = this.props;

        history.push(`/${task}`);
    };

    handleChangeSaved = () => {
        const { name,status,description } = this.state;

        this.props.updateTask({...this.currentTask,name,status,description});
    };



    render() {
        return (
            <TaskEdit
                task={this.currentTask}
                handleChangeSaved={this.handleChangeSaved}
                handleCancelledClick={this.handleCancelledClick}
                handleNameChange={this.handleNameChange}
                handleStatusChange={this.handleStatusChange}
                handleDescriptionChange={this.handleDescriptionChange}
            />
        );
    }
}


export default withRouter(connect(state => ({
    tasks: state.tasks
}),{updateTask})(TaskEditContainer));