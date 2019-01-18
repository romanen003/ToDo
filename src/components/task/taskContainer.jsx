import React, { Component } from 'react';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {updateTask} from "../../actions/actionTask";

import {Task} from "./task";
import {updateTransfer} from "../../actions/actionActiveComponent";

class TaskContainer extends Component {
    constructor(props){
        super(props);
        this.taskRef = React.createRef();
    };

    handleSelectTaskClick = (event) => {
        const {item, history} = this.props;

        if (this.taskRef.current === event.target){
            history.push(`/task${item.id}`);
        }
    };

    handleEditClick = (event) => {
        const {item, history, updateTransfer} = this.props;

        history.push(`/task${item.id}/edit`);
        updateTransfer(item.parentCategory);
        event.stopPropagation();
    };

    handleStatusChange = (status) => {
        const { item, updateTask} = this.props;

        updateTask({...item,status})
    };

    render() {
        return (
            <Task
                name={this.props.item.name}
                status={this.props.item.status}
                handleSelectTaskClick={this.handleSelectTaskClick}
                handleStatusChange={this.handleStatusChange}
                handleEditClick={this.handleEditClick}
                withTaskRef={this.taskRef}
            />
        );
    }
}

export default  withRouter(
    connect(
        state => ({tasks: state.tasks}),
        {updateTask, updateTransfer})(TaskContainer)
);