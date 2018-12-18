import React, { Component } from 'react';
import {func, bool, string} from 'prop-types';
import {Button, Input} from "..";

export class Form extends Component {

    onSubmitForm = (event) => {
        event.preventDefault();
    };

    render () {
        const {btnLabel} = this.props;

        return (
            <form onSubmit={this.onSubmitForm}>
                <Input/>
                <Button
                    label={btnLabel}
                />
            </form>
        );
    };
}