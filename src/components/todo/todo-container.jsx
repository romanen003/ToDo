import React, { Component } from 'react';
import {string, func, bool} from 'prop-types';
import {Todo} from "./todo";

export class TodoContainer extends Component {
    render () {
        const {
            defaultData
        } = this.props;

        return (
            <Todo
                defaultData={defaultData}
            />
        );
    };
}