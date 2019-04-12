import React, { Component, Fragment } from 'react';
import {object, array, func, bool} from 'prop-types';
import classNames from 'classnames';
import {CategoryList} from "../index";
import {Button, Input,Grid} from "../../elements";
import './category-item.scss';

const {Row, Col, T_align, Margin} = Grid;

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

        const ButtonList = isOpen ? Button.Top : Button.List;
        const isSelectStyle = classNames("category-item", {
            "category-item-selected" : isSelect
        }) ;


        return (
            <li>
                <div
                    onClick={onSelectClick}
                    className={isSelectStyle}
                >
                    <Grid sticky>
                        <Row margin={Margin.X12}>
                            <Col textAlign={T_align.LEFT}>
                                { hasChildren &&
                                    <ButtonList onClick={onChildrenShowClick} />
                                }
                                <Input
                                    value={nameValue}
                                    handleKeyDown={handleConfirmNameClick}
                                    onChange={handleNameChange}
                                    disabled={!nameEdit}
                                    showError={showError}
                                    messageError='min symbol - 4'
                                    handleFocus={handleInputOnFocus}
                                />
                            </Col>
                            <Col textAlign={T_align.RIGHT}>
                                {transferView
                                    ? (
                                        <Button.Transfer
                                            active={activeTransfer}
                                            onClick={handleTaskTransferClick}
                                        />
                                    ) : (
                                        <Fragment>
                                            {nameEdit ?
                                                <Fragment>
                                                    <Button.Confirm onClick={handleConfirmNameClick} />
                                                    <Button.Close onClick={handleCancelledClick} />
                                                </Fragment>
                                                :
                                                <Button.Edit onClick={handleEditNameClick} />
                                            }
                                            <Button.Delete onClick={handleCategoryDeleteClick} />
                                            <Button.Add
                                                active={isActiveAdd}
                                                onClick={handleActiveClick}
                                            />
                                        </Fragment>
                                    )
                                }
                            </Col>
                        </Row>
                    </Grid>
                </div>
                {isOpen && hasChildren &&
                    <CategoryList categoryList={category} parentCategoryIndex={item.id} />
                }
            </li>
        );
    };
}
