import React, { Component } from 'react';
import {func, array} from 'prop-types';

import {CategoryList} from "..";

import './categoryBox.css';


export class CategoryBox extends Component {
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
            renameCategory,
            activeCategory,
            active
        } = this.props;

        return (
            <aside className='CategoryBox'>
                <CategoryList
                    categoryList={category}
                    removeCategory={removeCategory}
                    renameCategory={renameCategory}
                    activeCategory={activeCategory}
                    active={active}
                />
            </aside>
        );
    };

}