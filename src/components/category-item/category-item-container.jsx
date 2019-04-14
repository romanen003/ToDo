import React, {Component} from 'react';
import {object, array} from 'prop-types';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {CategoryItem} from "./category-item";
import {
    removeCategory,
    setActiveCategory,
    setSelectCategory,
    setTransferCategory,
    renameCategory,
    deleteTask
} from "../../actions";

const EDIT = 'edit';

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

    componentDidMount = () => {
        const {item: {name}} = this.props;

        this.setState(() =>({
            nameValue: name,
            defaultValue: name
        }))
    };

    handleSelectClick = () => {
        const {
            item,
            match,
            setSelectCategory,
            history
        } = this.props;
        const url = Number(match.params.category) === item.id
            ? ''
            : `/category${item.id}`;

        history.push(url);
        setSelectCategory(item.id);
    };

    handleChildrenShowClick = () => this.setState((state) => ({ isOpen: !state.isOpen }));

    handleEditNameClick = () => this.setState(() => ({nameEdit: true}));

    handleNameChange = value => this.setState(() => ({nameValue: value, showError: value.length < 4 }));

    handleCategoryDeleteClick = () => {
        const {item, removeCategory, deleteTask} = this.props;

        removeCategory(item.id);
        deleteTask(item);
    };

    handleConfirmNameClick = () => {
        const {item, renameCategory} = this.props;
        const {nameValue} = this.state;

        if (nameValue.length >= 4 ){
            renameCategory({
                ...item,
                name: nameValue
            });
            this.handleCloseClick();
            this.setState(() => ({
                defaultValue: nameValue
            }));
            return;
        }
        this.setState(() => ({showError: true}));
    };

    handleCancelledClick = () => {
        this.setState((state) => ({
            nameEdit: false,
            nameValue: state.defaultValue
        }));
        this.handleCloseClick();
    };

    handleCloseClick = () => this.setState(() => ({ nameEdit: false, showError: false }));

    handleInputFocus = () => this.setState(() => ({ showError: false }));

    handleActiveClick = () => {
        const {setActiveCategory, item} = this.props;

        setActiveCategory(item.id);
    };

    handleTaskTransferClick = () => {
        const {setTransferCategory, item} = this.props;

        setTransferCategory(item.id);
    };


    render(){
        const {
            item,
            category,
            match,
            activeCategory,
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
        const isSelectCategory = match.params.category && Number(match.params.category) === item.id;
        const isActiveAdd = activeCategory === item.id;
        const transferView = Boolean(match.url.includes(EDIT));
        const activeTransfer = currentTransfer === item.id;

        return (
            <CategoryItem
                item={item}
                stateView={{isOpen, nameEdit, showError, nameValue, showEdit}}
                hasChildren={hasChildren}
                isActiveAdd={isActiveAdd}
                isSelect={isSelectCategory}
                activeTransfer={activeTransfer}
                transferView={transferView}
                category={category}
                onSelectClick={this.handleSelectClick}
                onChildrenShowClick={this.handleChildrenShowClick}
                handleConfirmNameClick={this.handleConfirmNameClick}
                handleCancelledClick={this.handleCancelledClick}
                handleNameChange={this.handleNameChange}
                handleInputFocus={this.handleInputFocus}
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
        activeCategory: state.activeState.activeCategory,
        currentTransfer: state.activeState.transferCategory
    }),
    {
        setActiveCategory,
        setSelectCategory,
        removeCategory,
        renameCategory,
        setTransferCategory,
        deleteTask
    }
)(CategoryItemComponent));
