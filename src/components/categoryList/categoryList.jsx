import React, { Component } from 'react';
import {string, func, bool} from 'prop-types';
import {CategoryItem} from "../../elements";
import './categoryList.css';

export class CategoryList extends Component {
    static propTypes = {

    };
    static defaultProps = {

    };

    state = {
        isOpen: false
    };


    render () {
        const {
            categoryList
        } = this.props;

        return (
            <ul className='List' >
                {categoryList.map((item,i) => {
                    if (item.subcategory){
                        return (
                            <React.Fragment>
                                <CategoryItem
                                    categoryName={item.nameCategory}
                                    key={i}
                                    hasChildren={true}
                                    value={<CategoryList categoryList={item.subcategory} />}
                                />

                            </React.Fragment>
                        );
                    }
                    return <CategoryItem categoryName={item.nameCategory} key={i}/>;
                })}
            </ul>
        )
    };
}