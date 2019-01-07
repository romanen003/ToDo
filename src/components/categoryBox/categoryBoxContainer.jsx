import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {activeCategory, removeCategory, renameCategory} from "../../actions/actionCategory";

import {CategoryBox} from "./categoryBox";

class CategoryBoxContainer extends Component {
    render() {
        const {
            category,
            removeCategory,
            renameCategory,
            activeCategory,
            active
        } = this.props;
        return (
            <CategoryBox
                category={category}
                removeCategory={removeCategory}
                renameCategory={renameCategory}
                activeCategory={activeCategory}
                active={active}
            />
        );
    }
}

export default connect(state => ({
    category: state.category,
    active: state.category.active
}),{removeCategory, renameCategory, activeCategory})(CategoryBoxContainer);