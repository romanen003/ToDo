import React, { Component } from 'react';
import { array, func, number} from 'prop-types';

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
            renameCategory,
            activeCategory,
            active
        } = this.props;
        const filterData = categoryList.filter((item)=> item.parentCategory === parentCategoryIndex);
        const className = parentCategoryIndex === null ? "List_parent" : "List" ;

        return (
            <ul className={className} >
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
};