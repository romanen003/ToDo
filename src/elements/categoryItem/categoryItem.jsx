import React, { Component, Fragment } from 'react';
import {func, bool, string} from 'prop-types';
import './categoryItem.css';
import '../style.css';
import {CategoryList} from "../../components";
import { withRouter } from "react-router";
import {dataTodo} from "../../store/data";
import {Button} from "..";

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
            const url = this.props.match.params.category === this.props.item.name
                ? ''
                : '/' + this.props.item.name ;
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
        const isSelect = this.props.match.params.category === item.name;
        const showChildren = isOpen ? "CategoryItem__more CategoryItem__more_close" : "CategoryItem__more ";
        const isSelected = isSelect ? "CategoryItem__body CategoryItem_selected" : "CategoryItem__body";
        const hasChildren = dataTodo.filter((category)=>
            category.parentCategory === item.name
            && category.type === 'category').length > 0;


        return (
            <li className="CategoryItem" >
                <div
                    onClick={this.handleSelectClick}
                    ref={this.categoryRef}
                    className={isSelected}
                >
                    <p className="CategoryItem__name">{item.name}</p>
                    {transfer
                        ? (
                            <Button
                                className='CategoryItem__transfer'
                                onClick={onTaskTransferClick}
                            />
                        ) : (
                            <Fragment>
                                {hasChildren &&
                                    <Button
                                        className={showChildren}
                                        onClick={this.onChildrenShowClick}
                                        label='>'
                                    />
                                }
                                <div className="CategoryItem__edit">
                                    <Button className="edit" onClick={onEditNameClick} />
                                </div>
                                <Button
                                    className="CategoryItem__delete"
                                    onClick={onCategoryDeleteClick}
                                />
                                <Button
                                    className="CategoryItem__addTask"
                                    label='+'
                                />
                            </Fragment>
                        )
                    }
                </div>
                {isOpen && hasChildren && <CategoryList categoryList={dataTodo} parentCategoryIndex={item.name}/>}
            </li>
        );
    };
}

export const CategoryItem = withRouter(CategoryItemComponent);