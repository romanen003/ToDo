import React, { Component } from 'react';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {updateTask} from "../../actions/actionTask";

import {Task} from "./task";

class TaskContainer extends Component {
    constructor (props) {
        super(props);
        this.containerRef = React.createRef();
        this.btnEditRef = React.createRef();
        this.state = {
            status:this.props.item.status
        };
    } ;

    withcontainerRef = (ref) => {
        this.containerRef = ref
    };
    withBtnEditRef = (ref) => {
        this.btnEditRef = ref
    };

    handleSelectTaskClick = (event) => {
        const {item: {id}, history} = this.props;

        if (this.containerRef === event.target) {
            history.push(`/${id}`);
        }
    };

    handleEditClick = (event) => {
        const {item: {id}, history} = this.props;

        if (this.btnEditRef.btnRef.current === event.target) {
            history.push(`/${id}/edit`);
        }
    };

    handleStatusChange = (status) => {
        const { item, updateTask} = this.props;
        updateTask({...item,status})
    };

    render() {
        const {status} = this.state;
        const {
            item: {name}
        } = this.props;

        return (
            <Task
                name={name}
                status={status}
                handleSelectTaskClick={this.handleSelectTaskClick}
                handleStatusChange={this.handleStatusChange}
                handleEditClick={this.handleEditClick}
                withcontainerRef={this.withcontainerRef}
                withBtnEditRef={this.withBtnEditRef}
            />
        );
    }
}

export default  withRouter(
    connect(
        (state)=>({
            tasks: state.tasks
        }),{updateTask})(TaskContainer));