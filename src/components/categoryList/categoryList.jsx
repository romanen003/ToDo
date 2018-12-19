import React, { Component } from 'react';
import {string, func, bool, array} from 'prop-types';
import {CategoryItem} from "../../elements";
import './categoryList.css';

export class CategoryList extends Component {
    static propTypes = {
        categoryList: array,
        isActiveCategory: string,
        handleSelectClick: func
    };
    static defaultProps = {
        categoryList: [],
        isActiveCategory: '',
        handleSelectClick: () => {}
    };

    state = {
        isOpen: false
    };
    handleSelectClick =(name) => {
        console.log(name);
        this.props.handleSelectClick(name)
    };

    render () {
        const {
            categoryList,
            isActiveCategory,
            handleSelectClick
        } = this.props;

        return (
            <ul className='List' >
                {categoryList.map((item,i) => {
                    if (item.subcategory){
                        return (
                            <React.Fragment>
                                <CategoryItem
                                    categoryName={item.nameCategory}
                                    key={`${item.nameCategory}---${i}`}
                                    hasChildren={true}
                                    handleSelectClick={()=>{this.handleSelectClick(item.nameCategory)}}
                                    isSelect={item.nameCategory === isActiveCategory}
                                    value={<CategoryList
                                        handleSelectClick={handleSelectClick}
                                        categoryList={item.subcategory}
                                        isActiveCategory={isActiveCategory}
                                    />}
                                />
                            </React.Fragment>
                        );
                    }
                    return <CategoryItem
                        categoryName={item.nameCategory}
                        key={`${item.nameCategory}---${i}`}
                        handleSelectClick={()=>{this.handleSelectClick(item.nameCategory)}}
                        isSelect={item.nameCategory === isActiveCategory}
                    />;
                })}
            </ul>
        )
    };
}