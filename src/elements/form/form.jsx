import React, { Component } from 'react';
import {string} from 'prop-types';
import {Button, Input} from "..";

export class Form extends Component {
    static propTypes = {
        btnLabel: string
    };

    state = {
        value: ''
    };
    handleChangeInput = (value) => {
      this.setState(() => ({
          value: value
      }))
    };

    onSubmitForm = (event) => {
        event.preventDefault();
    };

    handleButtonClick = () => {
        this.props.onClick(this.state.value);
    };


    render () {
        const {btnLabel} = this.props;

        return (
            <form onSubmit={this.onSubmitForm}>
                <Input onChange={this.handleChangeInput}/>
                <Button
                    label={btnLabel}
                    onClick={this.handleButtonClick}
                />
            </form>
        );
    };
}