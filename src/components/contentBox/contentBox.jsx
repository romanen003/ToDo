import React, { Component } from 'react';
import {CategoryBox, TasksBox} from "..";

export class ContentBox extends Component {
    render () {

        return (
            <div className="Todo__content">
                <div className="Grid">
                    <div className="Grid__item Grid__item_30">
                        <div className="BoxContent">
                            <CategoryBox/>
                        </div>
                    </div>
                    <div className="Grid__item Grid__item_70">
                        <div className="BoxContent">
                            <TasksBox/>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}