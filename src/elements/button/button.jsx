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
    CLEAR,
    LIST,
    TOP
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
    static List = LIST;
    static Top = TOP;

    handleOnClick = (event) => {
        event.stopPropagation();

        if (this.props.onClick){
            this.props.onClick(event)
        }
    };


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
                'btn_icon': icon,
                'btn_active': active
            }
        );

        return (
            <button
                type={type}
                className={buttonClassMame}
                onClick={this.handleOnClick}
                disabled={disabled}
                ref={withRef}
            >
                {label}{children}
            </button>
        );
    };
}
