import React, { Component } from 'react';
import {string, func, bool, array} from 'prop-types';
import {CategoryList} from "..";
import './categoryBox.css';

export class CategoryBox extends Component {
    static propTypes = {
        defaultData: array,
        isActiveCategory: string,
        handleSelectClick: func
    };
    static defaultProps = {
        defaultData: [],
        isActiveCategory: '',
        handleSelectClick: () => {}
    };

    render () {
        const {
            defaultData,
            isActiveCategory,
            handleSelectClick
        } = this.props;

        return (
            <div className='CategoryBox'>
                <CategoryList
                    handleSelectClick={handleSelectClick}
                    isActiveCategory={isActiveCategory}
                    categoryList={defaultData}
                />
            </div>
        );
    };

}