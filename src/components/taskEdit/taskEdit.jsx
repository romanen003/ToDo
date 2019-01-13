import React, { Component } from 'react';
import {array} from 'prop-types';

import {Button, Checkbox, Input, TextArea} from "../../elements";

import './taskEdit.css';


export class TaskEdit extends Component {
    static propTypes = {
        tasks: array
    };
    static defaultProps = {
        tasks: []
    };

    render () {
        const {
            handleChangeSaved,
            handleCancelledClick,
            handleNameChange,
            handleStatusChange,
            handleDescriptionChange,
            task: {name, status, description},
            showError
        } = this.props;

        return (
            <div className='TaskEdit'>
                <div className="TaskEdit__wrapper TaskEdit__wrapper_btns">
                    <div className="TaskEdit__buttons">
                        <Button
                            label='Save changes'
                            onClick={handleChangeSaved}
                        />
                    </div>
                    <div className="TaskEdit__buttons">
                        <Button
                            label='Cancel'
                            onClick={handleCancelledClick}
                        />
                    </div>
                </div>
                <Input
                    placeholder='Task'
                    value={name}
                    onChange={handleNameChange}
                    showError={showError}
                />
                <div className="TaskEdit__wrapper">
                    <Checkbox
                        text='Done'
                        checked={status}
                        onChange={handleStatusChange}
                    />
                </div>
                <div className="TaskEdit__wrapper">
                    <TextArea
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </div>
            </div>
        );
    };
}
