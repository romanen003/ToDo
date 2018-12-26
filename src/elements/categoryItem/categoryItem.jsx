import React, { Component, Fragment } from 'react';
import {func, bool, string} from 'prop-types';
import './categoryItem.css';
import '../style.css';
import {CategoryList} from "../../components";
import { withRouter } from "react-router";

class CategoryItemComponent extends Component {
    static defaultProps = {
        categoryName: '',
        hasChildren: false,
        onCategoryItemClick: () => {},
        onEditNameClick: () => {},
        onCategoryDeleteClick: () => {},
        transfer: false,
        onTaskTransferClick: () => {}
    };
    static propTypes = {
        categoryName: string,
        hasChildren: bool,
        onCategoryItemClick: func,
        onEditNameClick: func,
        onCategoryDeleteClick: func,
        transfer: bool,
        onTaskTransferClick: func
    };
    constructor (props) {
        super(props);
        this.categoryRef = React.createRef();

        this.state = {
            isOpen: false,
        };
    }


    onChildrenShowClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    handleSelectClick = (event) => {
        if (this.categoryRef.current === event.target){
            const url = this.props.match.params.category === this.props.item.nameCategory
                ? ''
                : this.props.item.nameCategory ;

            this.props.history.push(url);
        }
    };


    render () {
        const {
            item,
            onEditNameClick,
            onCategoryDeleteClick,
            transfer,
            onTaskTransferClick
        } = this.props;
        const {
            isOpen
        } = this.state;
        const isSelect = this.props.match.params.category === item.nameCategory;
        const showChildren = isOpen ? "CategoryItem__more CategoryItem__more_close" : "CategoryItem__more ";
        const isSelected = isSelect ? "CategoryItem__body CategoryItem_selected" : "CategoryItem__body";
        const hasChildren = Boolean(item.subcategory);

        return (
            <li
                className="CategoryItem"
            >
                <div
                    onClick={this.handleSelectClick}
                    ref={this.categoryRef}
                    className={isSelected}
                >
                    <p className="CategoryItem__name">{item.nameCategory}</p>
                    {transfer
                        ? (
                            <div
                                className='CategoryItem__transfer'
                                onClick={onTaskTransferClick}
                            />
                        ) : (
                            <Fragment>
                                {hasChildren &&
                                    <div
                                        className={showChildren}
                                        onClick={this.onChildrenShowClick}
                                    >
                                        >
                                    </div>
                                }
                                <div
                                    className="CategoryItem__edit"
                                    onClick={onEditNameClick}
                                >
                                    <div className="edit"></div>
                                </div>
                                <div
                                    className="CategoryItem__delete"
                                    onClick={onCategoryDeleteClick}
                                />
                                <div
                                    className="CategoryItem__addTask"
                                >
                                    +
                                </div>
                            </Fragment>
                        )
                    }
                </div>
                {isOpen && item.subcategory && <CategoryList categoryList={item.subcategory}/>}
            </li>
        );
    };
}

export const CategoryItem = withRouter(CategoryItemComponent);