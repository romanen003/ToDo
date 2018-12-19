import React, { Component } from 'react';
import {string, func, bool} from 'prop-types';
import {Checkbox} from "..";
import './taskItem.css';
import '../style.css';

export class Task extends Component {
    static propTypes = {
        onTaskEditClick: func
    };
    static defaultProps = {
        onTaskEditClick: () => {}
    };

    render () {
        const {
            onTaskEditClick,
            name
        } = this.props;

        return (
            <div className='Task'>
                <div className="Task__status">
                    <Checkbox/>
                </div>
                <div className="Task__title">{name}</div>
                <div
                    className="Task__edit"
                    onClick={onTaskEditClick}
                >
                    <div className="edit"></div>
                </div>
            </div>
        );
    };
}