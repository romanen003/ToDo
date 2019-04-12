import React, { Component } from 'react';
import {array} from 'prop-types';
import {withRouter} from "react-router/";
import {connect} from "react-redux";
import {CategoryList} from "..";


class CategoryBox extends Component {
    static propTypes = {
        category: array
    };
    static defaultProps = {
        category: []
    };

    render () {
        const {category} = this.props;

        return (
            <CategoryList categoryList={category} />
        );
    };
}

export const CategoryBoxContainer = withRouter(connect( state => ({
        category: state.category
    }))(CategoryBox));
