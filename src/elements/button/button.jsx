import React, {Component} from 'react';
import {string, func, bool} from 'prop-types';
import classNames from 'classnames';
import './button.scss';

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
            edit,
            confirm,
            close,
            del,
            transfer,
            label,
            onClick,
            disabled,
            withRef
        } = this.props;

        const buttonClassMame = classNames(
            'btn', {
                'btn_edit': edit,
                'btn_confirm': confirm,
                'btn_close': close,
                'btn_delete': del,
                'btn_transfer': transfer
            }
        );

        return (
            <button
                type={type}
                className={buttonClassMame}
                onClick={onClick}
                disabled={disabled}
                ref={withRef}
            >
                {label}
            </button>
        );
    };
}
