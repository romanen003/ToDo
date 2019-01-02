import React, { Component } from 'react';
import {string, func } from 'prop-types';
import {Checkbox} from "..";
import './taskItem.css';
import '../style.css';
import {withRouter} from "react-router";

export class TaskContainer extends Component {
    static propTypes = {
        onTaskEditClick: func,
        name: string
    };
    static defaultProps = {
        onTaskEditClick: () => {}
    };

    constructor (props) {
       super(props);
        this.containerRef = React.createRef();
    } ;


    handleSelectTaskClick = (event) => {
        if (this.containerRef.current === event.target) {
            const currentURL = this.props.match.url;
            const newURL = this.props.match.params.tasks === this.props.name
                ? currentURL
                : currentURL +'/'+ this.props.name;
            this.props.history.push(newURL);
        }
    };

    render () {
        const {
            onTaskEditClick,
            name
        } = this.props;

        return (
            <div className='Task'
                 onClick={this.handleSelectTaskClick}
                 ref={this.containerRef}
            >
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

export const Task = withRouter(TaskContainer);