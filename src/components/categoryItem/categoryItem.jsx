import React, { Component, Fragment } from 'react';
import {func, bool, string} from 'prop-types';
import { withRouter } from "react-router";
import classNames from 'classnames';

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

    state = {
        isOpen: false,
        nameEdit: false,
        showError: false,
        nameValue:''
    };

    componentWillMount = () => this.setState(()=> ({nameValue: this.props.item.name}));

    handleSelectClick = event => {
        const {currentTarget, target}= event;
        if (currentTarget.nodeName === "BUTTON" || currentTarget.nodeName === "INPUT"||
            target.nodeName === "BUTTON" || target.nodeName === "INPUT")return;

        const { item , match } = this.props;
        const url = Number(match.params.id) === item.id
            ? ''
            : '/category' + item.id ;

        this.props.history.push(url);

    };

    handleChildrenShowClick = () => this.setState({ isOpen: !this.state.isOpen });

    handleEditNameClick = () => this.setState(()=>({nameEdit: true}));

    handleNameChange = value => this.setState(() => ({nameValue: value, showError: value.length < 4 }));

    onCategoryDeleteClick = () => {
        const {item, removeCategory} = this.props;

        removeCategory(item);
    };





    handleConfirmNameClick = () => {
        const {item, renameCategory} = this.props;
        const {nameValue} = this.state;

        if (nameValue.length >= 4 ){
            renameCategory({...item,name : nameValue});
            this.handleCloseClick();
            return;
        }
         this.setState(() => ({ showError: true }));
    };

    handleCancelledClick = () => {
        this.setState(() => ({
            nameEdit: false
        }));
        this.handleCloseClick();
    };

    handleCloseClick = () => this.setState(()=>({ nameEdit: false, showError: false }));

    handleInputOnFocus = () => this.setState(() => ({ showError: false }));

    handleActiveClick = () => this.props.activeCategory(this.props.item);

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
        const { isOpen, nameEdit, showError } = this.state;
        const hasChildren = category.filter(category =>
            category.parentCategory === item.id ).length > 0;
        const isSelect = Number(this.props.match.params.id) === item.id;
        const activeAdd = active === item.id;
        const showChildren = classNames("btn_child", {"btn_close" : isOpen});
        const isSelected = classNames("CategoryItem__body", {"CategoryItem_selected" : isSelect}) ;
        const inputView = classNames("CategoryItem__name", {"CategoryItem__name_active" : nameEdit});
        const isActiveAdd = classNames("btn_addCategory", {"btn_categoryActive" : activeAdd});
        const paddingLeft = classNames("CategoryItem__left",{"CategoryItem__left_padd" : !hasChildren });


        return (
            <li className="CategoryItem" >
                <div
                    onClick={this.handleSelectClick}
                    className={isSelected}
                >
                    <div className={paddingLeft}>
                        { hasChildren &&
                            <div className="CategoryItem__child">
                                <Button
                                    className={showChildren}
                                    onClick={this.handleChildrenShowClick}
                                    label='>'
                                />
                            </div>

                        }
                        <Input
                            className={inputView}
                            value={item.name}
                            handleInputKeyDown={this.handleConfirmNameClick}
                            onChange={this.handleNameChange}
                            disabled={!nameEdit}
                            showError={showError}
                            messageError='min symbol - 4'
                            handleInputOnFocus={this.handleInputOnFocus}
                        />
                    </div>
                    <div className='CategoryItem__right'>
                        {transfer
                            ? (
                                <Button
                                    className='btn_transfer'
                                    onClick={onTaskTransferClick}
                                />
                            ) : (
                                <Fragment>

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
                                    <div className="CategoryItem__delete">
                                        <Button
                                            className="btn_delete"
                                            onClick={this.onCategoryDeleteClick}
                                        />
                                    </div>
                                    <div className="CategoryItem__addCategory">
                                        <Button
                                            className={isActiveAdd}
                                            label='+'
                                            onClick={this.handleActiveClick}
                                        />
                                    </div>
                                </Fragment>
                            )
                        }
                    </div>
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