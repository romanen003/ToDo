import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {Task} from "./task";
import {updateTask, setTransferCategory} from "../../actions";


class TaskContainerComponent extends Component {
    handleSelectTaskClick = () => {
        const {item, history} = this.props;

        history.push(`/task${item.id}`);

    };

    handleEditClick = () => {
        const {item, history, setTransferCategory} = this.props;

        history.push(`/task${item.id}/edit`);
        setTransferCategory(item.parentCategory);
    };

    handleStatusChange = (status) => {
        const {item, updateTask} = this.props;

        updateTask({
            ...item,
            status
        })
    };

    render() {
        const {item} = this.props;

        return (
            <Task
                name={item.name}
                status={item.status}
                handleSelectTaskClick={this.handleSelectTaskClick}
                handleStatusChange={this.handleStatusChange}
                handleEditClick={this.handleEditClick}
            />
        );
    }
}

export const TaskContainer = withRouter(
    connect(
        state => ({tasks: state.tasks}),
        {updateTask, setTransferCategory})(TaskContainerComponent)
);
