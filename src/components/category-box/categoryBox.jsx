import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {CategoryList} from "..";


const CategoryBox = ({
     category = []
}) => (
    <CategoryList categoryList={category} />
);


export const CategoryBoxContainer = withRouter(
    connect(state => ({
        category: state.category
}))(CategoryBox));
