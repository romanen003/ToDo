import React, { Component } from 'react';
import {func, bool, string} from 'prop-types';
import './checkbox.css';

export class Checkbox extends Component {
    static propTypes = {
        text: string
    };
    static defaultProps = {
        text: ''
    };

    render () {
        const {text} = this.props;

        return (
            <label className="checkbox">
                <input className='checkbox__input' type="checkbox"/>
                <div className="checkbox__text">{text}</div>
            </label>
        );
    };
}