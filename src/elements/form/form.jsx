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

    handleValueChange = value => this.setState(() => ({ value, showError: value.length < this.props.minLenght }));

    handleInputOnFocus = () => this.setState(() => ({ showError: false }));

    onSubmitForm = event => event.preventDefault();

    handleCheckValue = () => {
        const {minLenght} = this.props;
        const { value } = this.state;

        if (value.length < minLenght){
            this.setState(() => ({
                showError: true
            }));
        }else {
            this.props.onClick(value);
            this.setState(() => ({
                value: '',
                showError: false
            }));
        }
    };

    render () {
        const {btnLabel, placeholder, minLenght} = this.props;
        const { showError,value } = this.state;

        return (
            <form onSubmit={this.onSubmitForm} >
                <Input
                    placeholder={placeholder}
                    handleKeyDown={this.handleCheckValue}
                    inputRef={this.handleInputRef}
                    showError={showError}
                    handleInputOnFocus={this.handleInputOnFocus}
                    value={value}
                    onChange={this.handleValueChange}
                    minLenght={minLenght}
                />
                <Button
                    label={btnLabel}
                    onClick={this.handleCheckValue}
                />
            </form>
        );
    };
}
