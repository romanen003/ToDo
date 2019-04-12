import React, { Component } from 'react';
import { } from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {updateTask} from "../../actions/actionTask";
import { withRouter } from "react-router";

import {TaskEdit} from "../index";
import {updateTransfer} from "../../actions/actionActiveComponent";


class TaskEditContainer extends Component {
    static propTypes = {};
    static defaultProps = {};

    constructor (props) {
        super(props);
        const {
            tasks,
            match: {params: {id}}
        } = this.props;

        this.currentTask = tasks.filter(item => item.id === Number(id))[0];
        this.state = {
            name: this.currentTask.name,
            description: this.currentTask.description,
            status: this.currentTask.status,
            showError: false
        };
    };

    componentWillMount = () => this.props.updateTransfer(this.currentTask.parentCategory);

    handleNameChange = name => this.setState(() => ({ name, showError: name.length < 4 }));

    handleStatusChange = status => this.setState(() => ({ status }));

    handleDescriptionChange = description => this.setState(() => ({ description }));

    handleCancelledClick = () => this.props.history.go(-1);

    handleChangeSaved = () => {
        const { name,status, description } = this.state;
        const {history, updateTask, currentTransfer } = this.props;

        if (this.state.showError) return;
        updateTask({...this.currentTask, name, status, description, parentCategory: currentTransfer});
        history.push(`/task${this.currentTask.id}`);
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
                showError={this.state.showError}
            />
        );
    }
}


export default withRouter(connect(state => ({
    tasks: state.tasks,
    currentTransfer: state.activeState.transferCategory
}),{updateTask, updateTransfer})(TaskEditContainer));
