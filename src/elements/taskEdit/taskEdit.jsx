import React, { Component } from 'react';
import {string, func, bool} from 'prop-types';
import {Button, Checkbox, Input, TextArea} from "..";
import './taskEdit.css';

export class TaskEdit extends Component {
    static propTypes = {};
    static defaultProps = {};

    render () {
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
                        />
                    </div>
                </div>
                <Input
                    placeholder='Task'
                />
                <div className="TaskEdit__wrapper">
                    <Checkbox
                        text='Done'
                    />
                </div>
                <div className="TaskEdit__wrapper">
                    <TextArea/>
                </div>
            </div>
        );
    };
}