import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {addTask} from "../../actions/actionTask";
import {addCategory} from "../../actions/actionCategory";
import NavLink from "react-router-dom/es/NavLink";

import {FilterCheckbox} from "..";
import {Form, ProgressBar, Search} from "../../elements";

import './header.css';
import {updateActive} from "../../actions/actionActiveComponent";
import Switch from "react-router/es/Switch";
import Route from "react-router/es/Route";




export class HeaderContainer extends Component {

    handleAddCategoryClick = (value) => {
        const { addCategory, active, updateActive } = this.props;
        const item = {
            name: value,
            parentCategory: active
        };

        addCategory(item);
        updateActive(null);
    };

    handleAddTaskClick = (value) => {
        const {addTask, active, updateActive } = this.props;
        const item = {
            name: value,
            description: '',
            status: false,
            parentCategory: active
        };

        addTask (item);
        updateActive(null);
    };



    render () {
        const {tasks} = this.props;
        const result = ((tasks.filter(item => item.status === true).length)/tasks.length)*100;

        return (
            <header className='Header'>
                <div className="Grid">
                    <div className="Grid__item">
                        <NavLink to='/' className="Title">To-Do List</NavLink>
                    </div>
                    <div className="Grid__item">
                        <div className="Grid">
                            <div className="Grid__item">
                                <Switch>
                                    <Route path='/category:category' component={FilterCheckbox} />
                                </Switch>
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
                    <ProgressBar proc={result} />
                </div>
                <div className="Header__creatingItems">
                    <div className="Grid">
                        <div className="Grid__item">
                            <Form
                                placeholder='add category title'
                                btnLabel='add'
                                onClick={this.handleAddCategoryClick}
                                minLenght={4}
                            />
                        </div>
                        <div className="Grid__item">
                            <Form
                                placeholder='add task title'
                                btnLabel='add'
                                onClick={this.handleAddTaskClick}
                                minLenght={4}
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
    category: state.category,
    active: state.activeState.activeCategory
}),{ addTask, addCategory, updateActive })(HeaderContainer);