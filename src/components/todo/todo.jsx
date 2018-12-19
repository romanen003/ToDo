import React, { Component } from 'react';
import {string, func, bool} from 'prop-types';
import {Checkbox, Search, ProgressBar, Form, CategoryItem, Task, TaskEdit} from "../../elements";
import './todo.css';
import '../../elements/style.css';
import {CategoryBoxContainer, TasksBox} from "..";

export class Todo extends Component {
    render () {
        const {
            defaultData,
            isActiveCategory,
            handleSelectClick,
            showTasks
        } = this.props;

        return (
            <div className='Todo'>
                <div className="Todo__header">
                    <div className="Grid">
                        <div className="Grid__item">
                            <h3 className="Title">To-Do List</h3>
                        </div>
                        <div className="Grid__item">
                            <div className="Grid">
                                <div className="Grid__item">
                                    <Checkbox
                                        text='Show done'
                                    />
                                </div>
                                <div className="Grid__item">
                                    <Search
                                        placeholder='Search'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Todo__progressBar" >
                    <ProgressBar/>
                </div>
                <div className="Todo__creatingItems">
                    <div className="Grid">
                        <div className="Grid__item">
                            <Form
                                btnLabel='add category title'
                            />
                        </div>
                        <div className="Grid__item">
                            <Form
                                btnLabel='add task title'
                            />
                        </div>
                    </div>
                </div>
                <div className="Todo__content">
                    <div className="Grid">
                        <div className="Grid__item Grid__item_30">
                            <div className="BoxContent">
                                <CategoryBoxContainer
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
            </div>
        );
    };
}