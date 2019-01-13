import React, { Component } from 'react';
import {array} from 'prop-types';
import {withRouter} from "react-router/";
import connect from "react-redux/es/connect/connect";

import {CategoryList} from "..";

import './categoryBox.css';


class CategoryBox extends Component {
    static propTypes = {
        category: array
    };
    static defaultProps = {
        category: []
    };

    render () {
        const {
            category
        } = this.props;

        return (
            <aside className='CategoryBox'>
                <CategoryList categoryList={category} />
            </aside>
        );
    };

}

export const CategoryBoxContainer = withRouter(connect( state => ({
        category: state.category
    }), {})(CategoryBox));