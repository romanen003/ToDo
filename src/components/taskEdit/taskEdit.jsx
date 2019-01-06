import React, { Component } from 'react';
import {array} from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {updateTask} from "../../actions/actionTask";

import {Button, Checkbox, Input, TextArea} from "../../elements";

import './taskEdit.css';


export class TaskEditContainer extends Component {
    static propTypes = {
        tasks: array
    };
    static defaultProps = {
        tasks: []
    };

    constructor (props) {
        super(props);
        const data = this.props.tasks.filter(item => item.id === this.props.match.params.task) ;
        this.currentTask = data[0];
        this.inputNameRef = React.createRef();
        this.checkboxRef = React.createRef();
        this.textareaRef = React.createRef();
    }


    handleCancelledClick = () => {
        const newURL = `/${this.props.match.params.task}`;

        this.props.history.push(newURL);
    };

    handleChangeSaved = () => {
        const updateData = {
            status: this.checkboxRef.current.state.isChecked,
            description: this.textareaRef.current.state.value,
            name: this.inputNameRef.current.state.value
        };

        this.props.updateTask({...this.currentTask,...updateData});
    };

    render () {
        const {
            name,
            status,
            description
        } = this.currentTask;

        return (
            <div className='TaskEdit'>
                <div className="TaskEdit__wrapper TaskEdit__wrapper_btns">
                    <div className="TaskEdit__buttons">
                        <Button
                            label='Save changes'
                            onClick={this.handleChangeSaved}
                        />
                    </div>
                    <div className="TaskEdit__buttons">
                        <Button
                            label='Cancel'
                            onClick={this.handleCancelledClick}
                        />
                    </div>
                </div>
                <Input
                    placeholder='Task'
                    value={name}
                    ref={this.inputNameRef}
                />
                <div className="TaskEdit__wrapper">
                    <Checkbox
                        text='Done'
                        checked={status}
                        ref={this.checkboxRef}
                    />
                </div>
                <div className="TaskEdit__wrapper">
                    <TextArea
                        value={description}
                        ref={this.textareaRef}
                    />
                </div>
            </div>
        );
    };
}

export const TaskEdit = connect(state => ({
    tasks: state.tasks
}),{updateTask})(TaskEditContainer);
