import React, { Component, Fragment } from 'react';
import {object, array, func, bool} from 'prop-types';
import classNames from 'classnames';

import {CategoryList} from "../index";
import {Button, Input} from "../../elements";

import './categoryItem.css';
import '../../elements/style.css';


export class CategoryItem extends Component {
    static defaultProps = {
        item: {},
        hasChildren: false,
        transferView: false,
        category: [],
        onSelectClick: () => {},
        onChildrenShowClick: () => {},
        handleConfirmNameClick: () => {},
        handleNameChange: () => {},
        handleInputOnFocus: () => {},
        handleCancelledClick: () => {},
        handleEditNameClick: () => {},
        handleCategoryDeleteClick: () => {},
        handleActiveClick: () => {},
        handleTaskTransferClick: () => {}
    };
    static propTypes = {
        item: object,
        hasChildren: bool,
        transferView: bool,
        category: array,
        onSelectClick: func,
        onChildrenShowClick: func,
        handleConfirmNameClick: func,
        handleNameChange: func,
        handleInputOnFocus: func,
        handleCancelledClick: func,
        handleEditNameClick: func,
        handleCategoryDeleteClick: func,
        handleActiveClick: func,
        handleTaskTransferClick: func
    };





    render () {

        const {
            item,
            hasChildren,
            category,
            isSelect,
            transferView,
            isActiveAdd,
            onSelectClick,
            onChildrenShowClick,
            handleConfirmNameClick,
            handleNameChange,
            handleInputOnFocus,
            handleCancelledClick,
            handleEditNameClick,
            handleCategoryDeleteClick,
            handleActiveClick,
            handleTaskTransferClick,
            stateView: {isOpen, nameEdit, showError},
            activeTransfer
        } = this.props;




        const showChildren = classNames("btn_child", {"btn_close" : isOpen});
        const isSelectStyle = classNames("CategoryItem__body", {"CategoryItem_selected" : isSelect}) ;
        const inputStyle = classNames("CategoryItem__name", {"CategoryItem__name_active" : nameEdit});
        const activeStyle = classNames("btn_addCategory", {"btn_active" : isActiveAdd});
        const paddingLeft = classNames("CategoryItem__left",{"CategoryItem__left_padd" : !hasChildren });
        const activeTransferStyle = classNames("btn_transfer",{"btn_active": activeTransfer});

        return (
            <li className="CategoryItem" >
                <div
                    onClick={onSelectClick}
                    className={isSelectStyle}
                >
                    <div className={paddingLeft}>
                        { hasChildren &&
                            <div className="CategoryItem__child">
                                <Button
                                    className={showChildren}
                                    onClick={onChildrenShowClick}
                                    label='>'
                                />
                            </div>

                        }
                        <Input
                            className={inputStyle}
                            value={item.name}
                            handleInputKeyDown={handleConfirmNameClick}
                            onChange={handleNameChange}
                            disabled={!nameEdit}
                            showError={showError}
                            messageError='min symbol - 4'
                            handleInputOnFocus={handleInputOnFocus}
                        />
                    </div>
                    <div className='CategoryItem__right'>
                        {transferView
                            ? (
                                <div className="CategoryItem__transfer">
                                    <Button
                                        className={activeTransferStyle}
                                        onClick={handleTaskTransferClick}
                                    />
                                </div>
                            ) : (
                                <Fragment>

                                    {nameEdit ?
                                        <Fragment>
                                            <div className='CategoryItem__confirm'>
                                                <Button className="btn btn_confirm" onClick={handleConfirmNameClick} />
                                            </div>
                                            <div className='CategoryItem__close'>
                                                <Button className="btn btn_close"  onClick={handleCancelledClick}/>
                                            </div>
                                        </Fragment>
                                        :
                                        <div className="CategoryItem__edit">
                                            <Button className="btn btn_edit" onClick={handleEditNameClick} />
                                        </div>
                                    }
                                    <div className="CategoryItem__delete">
                                        <Button
                                            className="btn_delete"
                                            onClick={handleCategoryDeleteClick}
                                        />
                                    </div>
                                    <div className="CategoryItem__addCategory">
                                        <Button
                                            className={activeStyle}
                                            label='+'
                                            onClick={handleActiveClick}
                                        />
                                    </div>
                                </Fragment>
                            )
                        }
                    </div>
                </div>
                {isOpen && hasChildren &&
                    <CategoryList categoryList={category} parentCategoryIndex={item.id}/>
                }
            </li>
        );
    };
}