import React, { Component } from 'react';
import {Button, Input} from "../";
import {string} from 'prop-types';
import './search.css';

export class Search extends Component {
    static propTypes = {
        placeholder: string
    };

    state = {
        value:''
    };

    handleChangeInput = (value) => this.setState(() => ({value}));

    handleButtonClick = () => this.setState(() => ({value: ''}));

    render () {
        const {placeholder} = this.props;
        const {value} = this.state;

        return (
            <div className='Search'>
                <Input className='Search__input'
                       placeholder={placeholder}
                       onChange={this.handleChangeInput}
                       value={value}
                />
                <Button.Close
                    onClick={this.handleButtonClick}
                >
                    x
                </Button.Close>
            </div>
        );
    };
}
