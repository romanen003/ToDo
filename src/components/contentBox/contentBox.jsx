import React, { Component } from 'react';
import {CategoryBox, TasksBox} from "..";
import Route from "react-router/es/Route";
import {TaskEdit} from "../taskEdit/taskEdit";
import Switch from "react-router/es/Switch";

export class ContentBox extends Component {
    render () {

        return (
            <div className="Todo__content">
                <div className="Grid">
                    <div className="Grid__item Grid__item_30">
                        <div className="BoxContent">
                            <Route path='/:category?' component={CategoryBox}/>
                        </div>
                    </div>
                    <div className="Grid__item Grid__item_70">
                        <div className="BoxContent">
                            <Route exact path='/:category' component={TasksBox}/>
                            <Route path='/:task/edit' component={TaskEdit}/>
                            <Route exact path='/:task' component={TasksBox}/>
                            <Route exact path='/' component={TasksBox}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}