import React, { Component } from 'react';
import {CategoryBox, TasksBox} from "..";
import Route from "react-router/es/Route";
import {TaskEdit} from "../taskEdit/taskEdit";

export class ContentBox extends Component {
    render () {

        return (
            <div className="Todo__content">
                <div className="Grid">
                    <div className="Grid__item Grid__item_30">
                        <div className="BoxContent">
                            <Route exact path='/:category?' component={CategoryBox}/>
                        </div>
                    </div>
                    <div className="Grid__item Grid__item_70">
                        <div className="BoxContent">
                            <Route exact path='/:category' component={TasksBox}/>
                            <Route path='/:category/:task' component={TaskEdit}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}