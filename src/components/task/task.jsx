import React, { Component } from 'react';
import {string, func, bool } from 'prop-types';
import classNames from 'classnames'
import {Button, Checkbox} from "../../elements/index";

import './task.css';
import '../../elements/style.css';


export class Task extends Component {
    static propTypes = {
        handleEditClick: func,
        handleSelectTaskClick: func,
        handleStatusChange: func,
        name: string,
        status: bool
    };
    static defaultProps = {
        handleEditClick: () => {},
        handleSelectTaskClick: () => {},
        handleStatusChange: () => {},
        name: '',
        status: false
    };

    render () {
        const {
            name,
            status,
            handleSelectTaskClick,
            handleStatusChange,
            handleEditClick,
            withTaskRef
        } = this.props;

        return (

            <div className={classNames('Task',{'Todo_complete': status })} onClick={handleSelectTaskClick} ref={withTaskRef}>
                <div className="Task__status">
                    <Checkbox onChange={handleStatusChange} checked={status} />
                </div>
                <div className="Task__title">{name}</div>
                <div className="Task__edit">
                    <Button className="edit" onClick={handleEditClick}/>
                </div>
            </div>
        );
    };
}