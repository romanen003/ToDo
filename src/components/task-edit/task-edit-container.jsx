import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {updateTask, setTransferCategory} from "../../actions";
import {TaskEdit} from "../index";


class TaskEditComponent extends Component {
    constructor (props) {
        super(props);
        const {
            tasks,
            match: {params: {task}}
        } = this.props;

        this.currentTask = tasks.filter(item => item.id === Number(task))[0];
        this.state = {
            name: this.currentTask.name,
            description: this.currentTask.description,
            status: this.currentTask.status,
            showError: false
        };
    };

    componentDidMount = () => this.props.setTransferCategory(this.currentTask.parentCategory);

    handleNameChange = name => this.setState(() => ({name, showError: name.length < 4}));

    handleStatusChange = status => this.setState(() => ({status}));

    handleDescriptionChange = description => this.setState(() => ({description}));

    handleCancelledClick = () => this.props.history.go(-1);

    handleChangeSaved = () => {
        const {name,status, description} = this.state;
        const {history, updateTask, currentTransfer} = this.props;

        if (this.state.showError) return;
        updateTask({
            ...this.currentTask,
            name,
            status,
            description,
            parentCategory: currentTransfer
        });
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


export const TaskEditContainer =  withRouter(connect(state => ({
    tasks: state.tasks,
    currentTransfer: state.activeState.transferCategory
}),{
    updateTask,
    setTransferCategory
})(TaskEditComponent));
