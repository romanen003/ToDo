import React, {Component} from 'react';
import {func, string, bool} from 'prop-types';
import classNames from 'classnames';
import './input.scss';
import {SearchInput} from "./input-search/input-search";

export class Input extends Component {
    static defaultProps = {
        type: 'input',
        disabled: false
    };

    static proptypes = {
        type: string,
        disabled: bool,
        placeholder: string,
        onChange: func,
        handleKeyDown: func
    };

    static Search = SearchInput;


    handleChangeInput = ({target: {value}}) => this.props.onChange(value);

    handleKeyDown = ({keyCode, target: {value}}) => {
        if (keyCode === 13){
            this.props.handleKeyDown(value)
        }
    };

    handleFocus = () => {
        const {handleFocus} = this.props;

        if (handleFocus){
            handleFocus()
        }
    };

    handleBlur = () => {
        const {handleBlur} = this.props;

        if (handleBlur){
            handleBlur()
        }
    };


    render () {
        const {
            type,
            placeholder,
            value,
            disabled
        } = this.props;
        const InputClassName = classNames('input');

        return (
                <input
                    type={type}
                    className={InputClassName}
                    placeholder={placeholder}
                    value={value}
                    onChange={this.handleChangeInput}
                    onKeyDown={this.handleKeyDown}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    disabled={disabled}
                />
        );
    };
}
