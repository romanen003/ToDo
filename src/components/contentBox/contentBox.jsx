import React, { Component } from 'react';
import {Route, Switch } from 'react-router';

import { TasksBox } from "..";
import {CategoryBoxContainer} from '../categoryBox/categoryBox';
import TaskEditContainer from '../taskEdit/taskEditContainer';


export class ContentBox extends Component {
    render () {

        return (
            <div className="Todo__content">
                <div className="Grid">
                    <div className="Grid__item Grid__item_30">
                        <div className="BoxContent">
                            <Switch>
                                <Route exact path='/category:category?*' component={CategoryBoxContainer}/>
                                <Route path='/task:id?/edit' component={CategoryBoxContainer}/>
                                <Route exact component={CategoryBoxContainer}/>
                            </Switch>
                        </div>
                    </div>
                    <div className="Grid__item Grid__item_70">
                        <div className="BoxContent">
                            <Switch>
                                <Route path='/category:category/alldone' component={TasksBox}/>
                                <Route path='/category:category' component={TasksBox}/>
                                <Route exact path='/task:id?/edit' component={TaskEditContainer}/>
                                <Route exact path='/task:id?' component={TasksBox}/>
                                <Route path='/' component={TasksBox}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

