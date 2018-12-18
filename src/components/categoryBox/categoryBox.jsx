import React, { Component } from 'react';
import {string, func, bool, array} from 'prop-types';
import {CategoryList} from "..";
import './categoryBox.css';

export class CategoryBox extends Component {
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
            <div className='CategoryBox'>
                <CategoryList
                    categoryList={defaultData}
                />
            </div>
        );
    };

}