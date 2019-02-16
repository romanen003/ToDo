import React, { Component } from 'react';
import {object, array } from 'prop-types';
import {withRouter} from "react-router";
import connect from "react-redux/es/connect/connect";
import {ACTION_ACTIVE, ACTION_CATEGORY, ACTION_TASK} from "../../constants";


import {CategoryItem} from "./categoryItem";


export class CategoryItemComponent extends Component {
    static defaultProps = {
        item: {},
        category:[]
    };
    static propTypes = {
        item: object,
        category: array
    };

    state = {
        isOpen: false,
        nameEdit: false,
        showError: false,
        defaultValue: '',
        nameValue:'',
        showEdit: true
    };

    componentWillMount = () => this.setState({nameValue: this.props.item.name, defaultValue: this.props.item.name});

    handleSelectClick = event => {
        const {currentTarget, target} = event;
        if (currentTarget.nodeName === "BUTTON" || currentTarget.nodeName === "INPUT"||
            target.nodeName === "BUTTON" || target.nodeName === "INPUT") return;

        const { item , match, updateSelect, history } = this.props;
        const url = Number(match.params.category) === item.id
            ? ''
            : `/category${item.id}`;

        history.push(url);
        updateSelect(item.id);
    };

    handleChildrenShowClick = () => this.setState(() => ({ isOpen: !this.state.isOpen }));

    handleEditNameClick = () => this.setState(() => ({nameEdit: true}));

    handleNameChange = value => this.setState(() => ({nameValue: value, showError: value.length < 4 }));

    handleCategoryDeleteClick = () => {
        const {item, removeCategory, deletedCategorysTasks} = this.props;

        removeCategory(item);
        deletedCategorysTasks(item);
    };

    handleConfirmNameClick = () => {
        const {item, renameCategory, currentTransfer} = this.props;
        const {nameValue} = this.state;

        if (nameValue.length >= 4 ){
            renameCategory({
                ...item,
                name : nameValue,
                parentCategory: item.parentCategory
            });
            this.handleCloseClick();
            this.setState(() => ({
                defaultValue: nameValue
            }));
            return;
        }
        this.setState(() => ({ showError: true }));
    };

    handleCancelledClick = () => {
        this.setState(() => ({
            nameEdit: false,
            nameValue: this.state.defaultValue
        }));
        this.handleCloseClick();
    };

    handleCloseClick = () => this.setState(() => ({ nameEdit: false, showError: false }));

    handleInputOnFocus = () => this.setState(() => ({ showError: false }));

    handleActiveClick = () => this.props.updateActive(this.props.item.id);

    handleTaskTransferClick = () => this.props.updateTransfer(this.props.item.id);


    render(){
        const {
            item,
            category,
            match,
            active,
            currentTransfer
        } = this.props;
        const {
            isOpen,
            nameEdit,
            showError,
            nameValue,
            showEdit
        } = this.state;
        const hasChildren = category.filter(category => category.parentCategory === item.id ).length > 0;
        const isSelect = match.params.category && Number(match.params.category) === item.id;
        const isActiveAdd = active === item.id;
        const transferView = Boolean(match.url.includes('edit'));
        const activeTransfer = currentTransfer === item.id;

        return (
            <CategoryItem
                item={item}
                stateView={{isOpen, nameEdit, showError, nameValue, showEdit}}
                hasChildren={hasChildren}
                isActiveAdd={isActiveAdd}
                isSelect={isSelect}
                activeTransfer={activeTransfer}
                transferView={transferView}
                category={category}
                onSelectClick={this.handleSelectClick}
                onChildrenShowClick={this.handleChildrenShowClick}
                handleConfirmNameClick={this.handleConfirmNameClick}
                handleCancelledClick={this.handleCancelledClick}
                handleNameChange={this.handleNameChange}
                handleInputOnFocus={this.handleInputOnFocus}
                handleActiveClick={this.handleActiveClick}
                handleCategoryDeleteClick={this.handleCategoryDeleteClick}
                handleTaskTransferClick={this.handleTaskTransferClick}
                handleEditNameClick={this.handleEditNameClick}
            />
        )
    }
}

export const CategoryItemContainer =  withRouter(connect(
    state => ({
        tasks: state.tasks,
        activeState: state.activeState,
        currentItem: state.tasks,
        active: state.activeState.activeCategory,
        currentTransfer: state.activeState.transferCategory
    }),
    dispatch => ({
        updateActive: id => {
            dispatch({type: ACTION_ACTIVE.UPDATE__ACTIVE, payload: id})
        },
        updateSelect: id => {
            dispatch({type: ACTION_ACTIVE.UPDATE_SELECT, payload: id})
        },
        removeCategory: item => {
            dispatch({type: ACTION_CATEGORY.REMOVE, payload: item})
        },
        renameCategory: item => {
            dispatch({type: ACTION_CATEGORY.UPDATE, payload: item})
        },
        updateTransfer: id => {
            dispatch({type: ACTION_ACTIVE.UPDATE_TRANSFER, payload: id})
        },
        deletedCategorysTasks: item => {
            dispatch({type: ACTION_TASK.DELETE_CATEGORYS_TASKS, payload: item})
        }
    })
)(CategoryItemComponent));