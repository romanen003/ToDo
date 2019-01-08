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
        showError: false,
        value: ''
    };


    handleInputRef = (ref) => {
        this.inputRef = ref;
    };
    handleCheckValue = () => {
        const {minLenght} = this.props;
        const { value } = this.state;

        if (value.length <= minLenght){
            this.setState(() => ({
                showError: true
            }));
        }else{
            this.props.onClick(value);
            this.setState(() => ({
                value: ''
            }));
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

    handleValueChange = (value) => {
        this.setState(() => ({
            value
        }));
    };


    render () {
        const {btnLabel, placeholder, minLenght} = this.props;
        const { showError,value } = this.state;

        return (
            <form onSubmit={this.onSubmitForm} >
                <Input
                    placeholder={placeholder}
                    handleInputKeyDown={this.handleInputKeyDown}
                    inputRef={this.handleInputRef}
                    showError={showError}
                    handleInputOnFocus={this.handleInputOnFocus}
                    minLenght={minLenght}
                    value={value}
                    onChange={this.handleValueChange}
                />
                <Button
                    label={btnLabel}
                    onClick={this.handleButtonClick}
                />
            </form>
        );
    };
}