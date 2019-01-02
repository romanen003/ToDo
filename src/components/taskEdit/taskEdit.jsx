import React, { Component } from 'react';
import { string, bool } from 'prop-types';
import {Button, Checkbox, Input, TextArea} from "../../elements";
import './taskEdit.css';
import connect from "react-redux/es/connect/connect";

export class TaskEditContainer extends Component {
    static propTypes = {
        name: string,
        description: string,
        status: bool,
        parentCategory: string
    };

    handleCancelledClick = () => {
        const newURL = '/' + this.props.match.params.category;

        this.props.history.push(newURL);
    };

    render () {
        const { task } = this.props.match.params;
        const data = this.props.tasks.filter(item => item.name === task);
        const {
            name,
            status,
            description
        } = data[0];

        return (
            <div className='TaskEdit'>
                <div className="TaskEdit__wrapper TaskEdit__wrapper_btns">
                    <div className="TaskEdit__buttons">
                        <Button
                            label='Save changes'
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
                />
                <div className="TaskEdit__wrapper">
                    <Checkbox
                        text='Done'
                        checked={status}
                    />
                </div>
                <div className="TaskEdit__wrapper">
                    <TextArea
                        value={description}
                    />
                </div>
            </div>
        );
    };
}

export const TaskEdit = connect(state => ({
    tasks: state.tasks
}))(TaskEditContainer);
