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



    render () {
        const {
            type,
            className,
            label,
            onClick,
            disabled,
            withRef
        } = this.props;

        const ViewStyle = `button ${className}`;

        return (
            <button
                type={type}
                className={ViewStyle}
                onClick={onClick}
                disabled={disabled}
                ref={withRef}
            >
                {label}
            </button>
        );
    };
}