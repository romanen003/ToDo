import React, {Component} from 'react';
import classNames from 'classnames';
import {array, number} from 'prop-types';
import {CategoryItemContainer} from "../category-item/category-item-container";
import './category-list.scss';


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
        const filterData = categoryList.filter(item => item.parentCategory === parentCategoryIndex);
        const styleList = classNames("List", {
            "List_parent": parentCategoryIndex === null
        });

        return (
            <ul className={styleList} >
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
