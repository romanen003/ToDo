import React, { Component } from 'react';
import Route from "react-router/es/Route";

import { TasksBox, TaskEdit} from "..";
import CategoryBoxContainer from '../categoryBox/categoryBoxContainer';
import TaskEditContainer from '../taskEdit/taskEditContainer';

export class ContentBox extends Component {
    render () {

        return (
            <div className="Todo__content">
                <div className="Grid">
                    <div className="Grid__item Grid__item_30">
                        <div className="BoxContent">
                            <Route path='/:category?' component={CategoryBoxContainer}/>
                        </div>
                    </div>
                    <div className="Grid__item Grid__item_70">
                        <div className="BoxContent">
                            <Route exact path='/:category' component={TasksBox}/>
                            <Route path='/:task/edit' component={TaskEditContainer}/>
                            <Route exact path='/:task' component={TasksBox}/>
                            <Route exact path='/' component={TasksBox}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

