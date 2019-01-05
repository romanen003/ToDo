import React, { Component } from 'react';
import {func, array} from 'prop-types';
import connect from "react-redux/es/connect/connect";
import {removeCategory, renameCategory} from "../../actions/actionCategory";

import {CategoryList} from "..";

import './categoryBox.css';


export class CategoryBoxContainer extends Component {
    static propTypes = {
        category: array,
        removeCategory: func,
        renameCategory: func
    };
    static defaultProps = {
        category: [],
        removeCategory: () => {},
        renameCategory: () => {}
    };

    render () {
        const {
            category,
            removeCategory,
            renameCategory
        } = this.props;
        console.log(this.props,'up');
        return (
            <aside className='CategoryBox'>
                <CategoryList
                    categoryList={category}
                    removeCategory={removeCategory}
                    renameCategory={renameCategory}
                />
            </aside>
        );
    };

}

export const CategoryBox = connect(state => (
    {category: state.category}),{removeCategory, renameCategory})(CategoryBoxContainer);