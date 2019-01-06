import React, { Component, Fragment } from 'react';
import {func, bool, string} from 'prop-types';
import { withRouter } from "react-router";

import {CategoryList} from "../index";
import {Button, Input} from "../../elements";

import './categoryItem.css';
import '../../elements/style.css';


export class CategoryItemComponent extends Component {
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
        this.btnDeleteRef = React.createRef();
        this.inputNameRef = React.createRef();

        this.state = {
            isOpen: false,
            nameEdit: false,
            showError: false
        };
    }

    handleInputRef = (ref) => {
        this.inputNameRef = ref;
    };

    onChildrenShowClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    handleSelectClick = (event) => {
        const {
            item: {id},
            match: {params: {category}}
        } = this.props;

        if (this.categoryRef.current === event.target){
            const url = category === id
                ? ''
                : '/' + id ;
            this.props.history.push(url);
        }
    };

    onCategoryDeleteClick = (event) => {
        const {item} = this.props;

        if (this.btnDeleteRef.current.btnRef.current === event.target){
            this.props.removeCategory(item)
        }
    };

    handleEditNameClick = () => {
        this.setState(()=>({
            nameEdit: true
        }));
    };

    handleConfirmNameClick = () => {
        const {item, renameCategory} = this.props;
        const inputValue = this.inputNameRef.value;

        if (inputValue.length >= 4 ){
            renameCategory({...item,name : inputValue});
            this.handleCloseClick();
        }else{
         this.setState(() => ({
             showError: true
         }))
        }
    };

    handleCancelledClick = () => {
        this.setState(() => ({
            cancelChange: !this.state.cancelChange
        }));
        this.handleCloseClick();
    };

    handleCloseClick = () => {
        this.setState(()=>({
            nameEdit: false,
            showError: false
        }));
    };

    handleInputKeyDown = () => {
        this.handleConfirmNameClick();
    };

    handleInputOnFocus = () => {
        this.setState(() => ({
            showError: false
        }))
    };

    handleActiveClick = () => {
        this.props.activeCategory(this.props.item)
    };


    render () {
        const {
            item,
            transfer,
            onTaskTransferClick,
            category,
            removeCategory,
            renameCategory,
            activeCategory,
            active
        } = this.props;
        const {
            isOpen,
            nameEdit,
            showError
        } = this.state;
        const isSelect = this.props.match.params.category === item.id;
        const showChildren = isOpen ? "CategoryItem__more CategoryItem__more_close" : "CategoryItem__more ";
        const isSelected = isSelect ? "CategoryItem__body CategoryItem_selected" : "CategoryItem__body";
        const inputView = nameEdit ? 'CategoryItem__name CategoryItem__name_active' : 'CategoryItem__name';
        const isActiveAdd = active === item.id ? 'CategoryItem__addCategory CategoryItem__addCategory_active' : 'CategoryItem__addCategory';
        const hasChildren = category.filter(category =>
            category.parentCategory === item.id ).length > 0;


        return (
            <li className="CategoryItem" >
                <div
                    onClick={this.handleSelectClick}
                    ref={this.categoryRef}
                    className={isSelected}
                >
                    <Input
                        className={inputView}
                        value={item.name}
                        inputRef={this.handleInputRef}
                        handleInputKeyDown={this.handleInputKeyDown}
                        disabled={!nameEdit}
                        showError={showError}
                        messageError='min symbol - 4'
                        handleInputOnFocus={this.handleInputOnFocus}
                        cancelChange={this.cancelChange}
                    />
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
                                {nameEdit ?
                                <Fragment>
                                    <div className='CategoryItem__confirm'>
                                        <Button className="btn btn_confirm" onClick={this.handleConfirmNameClick} />
                                    </div>
                                    <div className='CategoryItem__close'>
                                        <Button className="btn btn_close"  onClick={this.handleCancelledClick}/>
                                    </div>
                                </Fragment>
                                    :
                                <div className="CategoryItem__edit">
                                    <Button className="btn btn_edit" onClick={this.handleEditNameClick} />
                                </div>
                                }

                                <Button
                                    className="CategoryItem__delete"
                                    onClick={this.onCategoryDeleteClick}
                                    ref={this.btnDeleteRef}
                                />
                                <Button
                                    className={isActiveAdd}
                                    label='+'
                                    onClick={this.handleActiveClick}
                                />
                            </Fragment>
                        )
                    }
                </div>
                {isOpen && hasChildren &&
                <CategoryList
                    categoryList={category}
                    parentCategoryIndex={item.id}
                    removeCategory={removeCategory}
                    renameCategory={renameCategory}
                    activeCategory={activeCategory}
                />}
            </li>
        );
    };
}

export const CategoryItem = withRouter(CategoryItemComponent);