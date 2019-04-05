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
            stateView: {isOpen, nameEdit, showError, nameValue},
            activeTransfer
        } = this.props;




        const showChildren = classNames("btn_child", {"btn_close" : isOpen});
        const isSelectStyle = classNames("CategoryItem__body", {"CategoryItem_selected" : isSelect}) ;
        const inputStyle = classNames("CategoryItem__name", {"CategoryItem__name_active" : nameEdit});
        const activeStyle = classNames("btn_addCategory", {"btn_active" : isActiveAdd});
        const paddingLeft = classNames("CategoryItem__left",{"CategoryItem__left_padd" : !hasChildren });
        const activeTransferStyle = classNames({"btn_active": activeTransfer});

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
                            value={nameValue}
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
                                    <Button.Transfer
                                        className={activeTransferStyle}
                                        onClick={handleTaskTransferClick}
                                    />
                                </div>
                            ) : (
                                <Fragment>
                                    {nameEdit ?
                                        <Fragment>
                                            <div className='CategoryItem__confirm'>
                                                <Button.Confirm onClick={handleConfirmNameClick} />
                                            </div>
                                            <div className='CategoryItem__close'>
                                                <Button.Close onClick={handleCancelledClick}/>
                                            </div>
                                        </Fragment>
                                        :
                                        <div className="CategoryItem__edit">
                                            <Button.Edit onClick={handleEditNameClick} />
                                        </div>
                                    }
                                    <div className="CategoryItem__delete">
                                        <Button.Delete onClick={handleCategoryDeleteClick}/>
                                    </div>
                                    <div className="CategoryItem__addCategory">
                                        <Button.Add
                                            active={isActiveAdd}
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
