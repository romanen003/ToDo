import React, { Component } from 'react';
import {CategoryList} from "..";
import './categoryBox.css';
import connect from "react-redux/es/connect/connect";

export class CategoryBoxContainer extends Component {
    static propTypes = {};
    static defaultProps = {};

    render () {

        return (
            <aside className='CategoryBox'>
                <CategoryList
                    categoryList={this.props.category}
                />
            </aside>
        );
    };

}

export const CategoryBox = connect(state => ({category: state.category}))(CategoryBoxContainer);