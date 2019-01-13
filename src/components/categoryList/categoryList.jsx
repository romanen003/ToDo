import React, { Component } from 'react';
import { array, number} from 'prop-types';

import {CategoryItemContainer} from "../categoryItem/categoryItemContainer";

import './categoryList.css';


export class CategoryList extends Component {
    static propTypes = {
        categoryList: array,
        parentCategoryIndex: number,
    };
    static defaultProps = {
        categoryList: [],
        parentCategoryIndex: null,
    };

    render () {
        const {
            categoryList,
            parentCategoryIndex
        } = this.props;
        const filterData = categoryList.filter((item)=> item.parentCategory === parentCategoryIndex);
        const className = parentCategoryIndex === null ? "List_parent" : "List" ;

        return (
            <ul className={className} >
                {filterData.map(item =>
                    <CategoryItemContainer
                        key={item.id}
                        item={item}
                        category={categoryList}
                    />
                )}
            </ul>
        )
    };
};