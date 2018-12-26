import React, { Component } from 'react';
import {} from 'prop-types';
import {CategoryList} from "..";
import {dataTodo} from "../../dataDefault/data";
import './categoryBox.css';

export class CategoryBox extends Component {
    static propTypes = {};
    static defaultProps = {};

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