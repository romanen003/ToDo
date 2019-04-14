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


    handleChange = ({target: {value}}) =>{
        const {onChange} = this.props;

        if (onChange) {
            onChange(value);
        }

    };

    handleKeyDown = ({keyCode, target: {value}}) => {
        if (keyCode === 13){
            const {handleKeyDown} = this.props;

            if (handleKeyDown) {
                handleKeyDown(value)
            }
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

    handleClick = (event) => {
        const {handleClick} = this.props;

        event.stopPropagation();

        if (handleClick){
            handleClick()
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
                    onClick={this.handleClick}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    disabled={disabled}
                />
        );
    };
}
