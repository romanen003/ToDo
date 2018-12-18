import React, { Component } from 'react';
import {Input} from "..";
import {string, func, bool} from 'prop-types';
import './search.css';

export class Search extends Component {
    render () {
        const {placeholder} = this.props;

        return (
            <div className='Search'>
                <Input className='Search__input'
                       placeholder={placeholder}
                />
                <button className='Search__btn'>x</button>
            </div>
        );
    };
}