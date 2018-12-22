import React, { Component } from 'react';
import {CategoryBox, TasksBox} from "..";

export class ContentBox extends Component {
    render () {
        const {
            handleSelectClick,
            isActiveCategory,
            defaultData,
            showTasks
        } = this.props;
        console.log(this.props);

        return (
            <div className="Todo__content">
                <div className="Grid">
                    <div className="Grid__item Grid__item_30">
                        <div className="BoxContent">
                            <CategoryBox
                                handleSelectClick={handleSelectClick}
                                isActiveCategory={isActiveCategory}
                                defaultData={defaultData}
                            />
                        </div>
                    </div>
                    <div className="Grid__item Grid__item_70">
                        <div className="BoxContent">
                            <TasksBox
                                showTasks={showTasks}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}