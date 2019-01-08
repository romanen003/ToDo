import React, { Component } from 'react';
import {Button, Checkbox} from "../../elements/index";
import {string, func } from 'prop-types';

import './task.css';
import '../../elements/style.css';


export class Task extends Component {
    static propTypes = {
        onTaskEditClick: func,
        name: string
    };
    static defaultProps = {
        onTaskEditClick: () => {}
    };

    render () {
        const {
            name,
            status,
            handleSelectTaskClick,
            handleStatusChange,
            handleEditClick,
            withcontainerRef,
            withBtnEditRef
        } = this.props;

        return (
            <div className='Task'
                 onClick={handleSelectTaskClick}
                 ref={withcontainerRef}
            >
                <div className="Task__status">
                    <Checkbox onChange={handleStatusChange} checked={status} />
                </div>
                <div className="Task__title">{name}</div>
                <div className="Task__edit">
                    <Button className="edit" onClick={handleEditClick} ref={withBtnEditRef}/>
                </div>
            </div>
        );
    };
}