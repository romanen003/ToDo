import React, {Component} from 'react';
import {string, func, bool} from 'prop-types';
import classNames from 'classnames';
import {BUTTONS_WITH_ICONS} from "./button-icon";
import './button.scss';

const {
    EDIT,
    CONFIRM,
    CLOSE,
    DELETE,
    TRANSFER,
    ADD,
    CLEAR
} = BUTTONS_WITH_ICONS;


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

    static Edit = EDIT;
    static Confirm = CONFIRM;
    static Close = CLOSE;
    static Delete = DELETE;
    static Transfer = TRANSFER;
    static Add = ADD;
    static Clear = CLEAR;


    render () {
        const {
            type,
            active,
            edit,
            confirm,
            close,
            del,
            transfer,
            label,
            onClick,
            disabled,
            withRef,
            children,
            icon
        } = this.props;

        const buttonClassMame = classNames(
            'btn', {
                'btn_edit': edit,
                'btn_confirm': confirm,
                'btn_close': close,
                'btn_delete': del,
                'btn_transfer': transfer,
                'btn_active': active,
                'btn_icon': icon
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
                {label}{children}
            </button>
        );
    };
}
