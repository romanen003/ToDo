import React, { Component } from 'react';
import {string, func, bool, array} from 'prop-types';
import {CategoryList} from "..";
import './categoryBox.css';
import { arrayTasks } from '../../dataDefault/arrayTasks';
import {dataTodo} from "../../dataDefault/data";

export class CategoryBox extends Component {
    static propTypes = {

    };
    static defaultProps = {

    };

    render () {

        return (
            <aside className='CategoryBox'>
                <CategoryList
                    categoryList={dataTodo}

                />
            </aside>
        );
    };

}