import React, { Component } from 'react';
import {Input} from "..";
import { string } from 'prop-types';
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
                <button
                    className='Search__btn'
                    onClick={this.handleButtonClick}
                >
                    x
                </button>
            </div>
        );
    };
}