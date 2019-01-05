import React, { Component } from 'react';
import { array, number, func} from 'prop-types';

import {CategoryItem} from "../../elements";

import './categoryList.css';


export class CategoryList extends Component {
    static propTypes = {
        categoryList: array,
        parentCategoryIndex: number,
        removeCategory: func
    };
    static defaultProps = {
        categoryList: [],
        parentCategoryIndex: null,
        removeCategory: () => {}
    };

    render () {
        const {
            categoryList,
            parentCategoryIndex,
            removeCategory,
            renameCategory
        } = this.props;
        const filterData = categoryList.filter((item)=> item.parentCategory === parentCategoryIndex);

        return (
            <ul className='List' >
                {filterData.map(item =>
                    <CategoryItem
                        key={item.name}
                        item={item}
                        category={categoryList}
                        removeCategory={removeCategory}
                        renameCategory={renameCategory}
                    />
                )}
            </ul>
        )
    };
}