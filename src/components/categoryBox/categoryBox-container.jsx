import React, { Component } from 'react';
import {string, func, bool, array} from 'prop-types';
import {CategoryBox} from "./categoryBox";

export class CategoryBoxContainer extends Component {
    static propTypes = {
        defaultData: array
    };
    static defaultProps = {
        defaultData: []
    };

    render () {
        const {
            defaultData
        } = this.props;

        return (
            <CategoryBox
                defaultData={defaultData}
            />
        )
    };
}