import React, { Component } from 'react';
import {string, func, bool} from 'prop-types';
import {Todo} from "./todo";
import {searchTasks} from "../../dataDefault/arrayTasks";

export class TodoContainer extends Component {
    static propTypes = {};
    static defaultProps = {};

    state ={
        isActiveCategory: '',
        showTasks: []
    };

    handleSelectClick = (category) => {
        this.setState({
            isActiveCategory: category === this.state.isActiveCategory ? '' : category,
            showTasks: category === this.state.isActiveCategory ? [] :  searchTasks(this.props.defaultData,category)
        });
    };

    render () {
        const {
            defaultData
        } = this.props;
        const {
            isActiveCategory,
            showTasks
        } = this.state;

        return (
            <Todo
                handleSelectClick={this.handleSelectClick}
                isActiveCategory={isActiveCategory}
                defaultData={defaultData}
                showTasks={showTasks}
            />
        );
    };
}