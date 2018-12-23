import React, { Component } from 'react';
import {string, func, bool, array} from 'prop-types';
import {CategoryList} from "..";
import './categoryBox.css';
import { arrayTasks } from '../../dataDefault/arrayTasks';

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

        return (
            <aside className='CategoryBox'>
                <CategoryList
                    categoryList={arrayTasks}
                />
            </aside>
        );
    };

}