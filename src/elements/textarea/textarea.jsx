import React, { Component } from 'react';
import {string, func, bool, number} from 'prop-types';
import './textarea.css';

export class TextArea extends Component {
    static propTypes = {
        className: string,
        rows: number
    };
    static defaultProps = {
        className: 'textarea',
        rows: 30
    };
    
    render () {
        const {
            className,
            rows
        } = this.props;

        return (
            <textarea
                className={className}
                rows={rows}
            >

            </textarea>
        );
    };
}