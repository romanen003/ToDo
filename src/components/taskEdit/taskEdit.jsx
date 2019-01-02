import React, { Component } from 'react';
import { string, bool } from 'prop-types';
import {Button, Checkbox, Input, TextArea} from "../../elements";
import './taskEdit.css';
import withRouter from "react-router/es/withRouter";

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
        const {
            name,
            description,
            status,
            parentCategory
        } = this.props.data;

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

export const TaskEdit = withRouter(TaskEditContainer);