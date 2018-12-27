import React, { Component } from 'react';
import { array, number} from 'prop-types';
import {CategoryItem} from "../../elements";
import './categoryList.css';

export class CategoryList extends Component {
    static propTypes = {
        categoryList: array,
        parentCategoryIndex: number
    };
    static defaultProps = {
        categoryList: [],
        parentCategoryIndex: null
    };

    render () {
        const {
            categoryList,
            parentCategoryIndex
        } = this.props;
        const filterData = categoryList.filter((item)=> item.type === 'category'
            && item.parentCategory === parentCategoryIndex);

        return (
            <ul className='List' >
                {filterData.map((item,i)=>(
                    <CategoryItem
                        key={`${item.name}-${i}`}
                        item={item}
                    />
                ))}
            </ul>
        )
    };
}