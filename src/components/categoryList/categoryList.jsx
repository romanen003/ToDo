import React, { Component } from 'react';
import { array, func, string} from 'prop-types';

import {CategoryItem} from "../../elements";

import './categoryList.css';


export class CategoryList extends Component {
    static propTypes = {
        categoryList: array,
        parentCategoryIndex: string,
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
            renameCategory,
            activeCategory,
            active
        } = this.props;
        const filterData = categoryList.filter((item)=> item.parentCategory === parentCategoryIndex);

        return (
            <ul className='List' >
                {filterData.map(item =>
                    <CategoryItem
                        key={item.id}
                        item={item}
                        category={categoryList}
                        removeCategory={removeCategory}
                        renameCategory={renameCategory}
                        activeCategory={activeCategory}
                        active={active}
                    />
                )}
            </ul>
        )
    };
}