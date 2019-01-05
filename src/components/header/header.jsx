import React, { Component } from 'react';
import {Checkbox, Form, ProgressBar, Search} from "../../elements";
import connect from "react-redux/es/connect/connect";
import {addTask} from "../../actions/actionTask";
import {addCategory} from "../../actions/actionCategory";

import './header.css';


export class HeaderContainer extends Component {

    handleAddCategoryClick = (value) => {
        const { addCategory} = this.props;
        const item = {
            name: value,
            parentCategory: null
        };

        addCategory(item);
    };

    handleAddTaskClick = (value) => {
        const {addTask } = this.props;
        const item = {
            name: value,
            description: '',
            status: false,
            parentCategory: null
        };

        addTask (item);
    };


    render () {
        return (
            <header className='Header'>
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
                <div className="Header__progressBar" >
                    <ProgressBar/>
                </div>
                <div className="Header__creatingItems">
                    <div className="Grid">
                        <div className="Grid__item">
                            <Form
                                placeholder='add category title'
                                btnLabel='add'
                                onClick={this.handleAddCategoryClick}
                            />
                        </div>
                        <div className="Grid__item">
                            <Form
                                placeholder='add task title'
                                btnLabel='add'
                                onClick={this.handleAddTaskClick}
                            />
                        </div>
                    </div>
                </div>
            </header>
        )
    };
}

export const Header = connect(state => ({
    tasks: state.tasks,
    category: state.category
}),{addTask,addCategory})(HeaderContainer);