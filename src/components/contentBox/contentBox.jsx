import React, { Component } from 'react';
import {Route, Switch } from 'react-router';

import { TasksBox } from "..";
import CategoryBoxContainer from '../categoryBox/categoryBoxContainer';
import TaskEditContainer from '../taskEdit/taskEditContainer';


export class ContentBox extends Component {
    render () {

        return (
            <div className="Todo__content">
                <div className="Grid">
                    <div className="Grid__item Grid__item_30">
                        <div className="BoxContent">
                            <Switch>
                                <Route path='/category:id?' component={CategoryBoxContainer}/>
                                <Route path='/*' component={CategoryBoxContainer}/>
                            </Switch>
                        </div>
                    </div>
                    <div className="Grid__item Grid__item_70">
                        <div className="BoxContent">
                            <Switch>
                                <Route path='/category:id' component={TasksBox}/>
                                <Route path='/task:id?/edit' component={TaskEditContainer}/>
                                <Route path='/task:id?' component={TasksBox}/>
                                <Route path='/' component={TasksBox}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

