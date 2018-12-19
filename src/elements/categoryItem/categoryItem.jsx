import React, { Component } from 'react';
import {func, bool, string} from 'prop-types';
import './categoryItem.css';
import '../style.css';

export class CategoryItem extends Component {
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
    };

    onChildrenShowClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
    handleSelectClick = (event) => {
        if (event.target.classList.contains('CategoryItem')){
            this.props.handleSelectClick();
        }
    };


    render () {
        const {
            categoryName,
            hasChildren,
            onEditNameClick,
            onCategoryDeleteClick,
            transfer,
            onTaskTransferClick,
            value,
            isSelect,
        } = this.props;
        const showChildren = `CategoryItem__more ${this.state.isOpen ? 'CategoryItem__more_close' : ''}`;
        const isSelected = `CategoryItem ${isSelect ? 'CategoryItem_selected' : ''}`;

        return (
            <React.Fragment>
                <div className={isSelected} onClick={this.handleSelectClick}>
                    {hasChildren && <div
                        className={showChildren}
                        onClick={this.onChildrenShowClick}
                    >></div>}
                    <p className="CategoryItem__name">{categoryName}</p>
                    {!transfer &&  <React.Fragment>
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
                    </React.Fragment>}
                    {transfer &&
                    <div
                        className='CategoryItem__transfer'
                        onClick={onTaskTransferClick}
                    />}
                </div>
                {this.state.isOpen && value}
            </React.Fragment>
        );
    };
}