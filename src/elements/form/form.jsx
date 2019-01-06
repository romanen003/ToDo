import React, { Component } from 'react';
import {string} from 'prop-types';

import {Button, Input} from "..";

import './form.css';

export class Form extends Component {
    static propTypes = {
        btnLabel: string,
        placeholder: string
    };
    static defaultProps = {};

    state = {
        showError: false
    };


    handleInputRef = (ref) => {
        this.inputRef = ref;
    };
    handleCheckValue = () => {
        const {minLenght} = this.props;
        const { value } = this.inputRef;

        if (value.length <= minLenght){
            this.setState(() => ({
                showError: true
            }));
        }else{
            this.props.onClick(value);
        }
    };

    onSubmitForm = (event) => {
        event.preventDefault();
    };

    handleButtonClick = () => {
        this.handleCheckValue()
    };

    handleInputKeyDown = () => {
        this.handleCheckValue()
    };
    handleInputOnFocus = () => {
        this.setState(() => ({
            showError: false
        }));
    };


    render () {
        const {btnLabel, placeholder, minLenght} = this.props;
        const { showError } = this.state;

        return (
            <form onSubmit={this.onSubmitForm} >
                <Input
                    placeholder={placeholder}
                    handleInputKeyDown={this.handleInputKeyDown}
                    inputRef={this.handleInputRef}
                    showError={showError}
                    handleInputOnFocus={this.handleInputOnFocus}
                    minLenght={minLenght}
                />
                <Button
                    label={btnLabel}
                    onClick={this.handleButtonClick}
                />
            </form>
        );
    };
}