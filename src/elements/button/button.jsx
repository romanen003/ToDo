import React, { Component } from 'react';
import {string, func, bool} from 'prop-types';
import './button.css';

export class Button extends Component {
    static propTypes = {
        type: string,
        className: string,
        label: string,
        onClick: func,
        disabled: bool
    };
    static defaultProps = {
        type: 'button',
        className: 'button',
        label: '',
        onClick: () => {},
        disabled: false
    };

    btnRef = React.createRef();



    render () {
        const {
            type,
            className,
            label,
            onClick,
            disabled
        } = this.props;

        return (
            <button
                type={type}
                className={className}
                onClick={onClick}
                disabled={disabled}
                ref={this.btnRef}
            >
                {label}
            </button>
        );
    };
}