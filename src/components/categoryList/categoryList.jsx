import React, { Component, Fragment } from 'react';
import {string, func, bool, array} from 'prop-types';
import {CategoryItem} from "../../elements";
import './categoryList.css';

export class CategoryList extends Component {
    static propTypes = {
        categoryList: array,
        isActiveCategory: string,
        handleSelectClick: func
    };
    static defaultProps = {
        categoryList: [],
        isActiveCategory: '',
        handleSelectClick: () => {}
    };

    render () {
        const {
            categoryList
        } = this.props;

        return (
            <ul className='List' >
                {categoryList.map((item,i)=>(
                    <CategoryItem
                        key={`${item.nameCategory}-${i}`}
                        item={item}
                    />
                ))}
            </ul>
        )
    };
}