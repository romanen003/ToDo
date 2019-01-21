import React, { Component } from 'react';
import { func, string, bool } from 'prop-types';

import './input.css';

export class Input extends Component {
    static propTypes = {
        type: string,
        placeholder: string,
        className: string,
        onChange: func,
        value: string,
        disabled: bool,
        handleInputKeyDown: func,
        showError: bool,
        handleInputOnFocus: func
    };
    static defaultProps = {
        type: 'text',
        placeholder: '',
        className: 'Input__input',
        onChange: ()=>{},
        handleInputKeyDown: ()=>{},
        handleInputOnFocus: ()=>{},
        value: '',
        disabled: false,
        showError: false,
    };

    handleChangeInput = ({target: {value}}) => this.props.onChange(value);

    handleInputKeyDown = ({keyCode, target: {value}}) => {
        if (keyCode === 13){
            this.props.handleInputKeyDown(value)
        }
    };

    render () {
        const {
            type,
            placeholder,
            value,
            className,
            disabled,
            showError,
            handleInputOnFocus,
            minLenght
        } = this.props;

        return (
            <div className='Input'>
                <input
                    type={type}
                    className={className}
                    placeholder={placeholder}
                    value={value}
                    onChange={this.handleChangeInput}
                    onKeyDown={this.handleInputKeyDown}
                    onFocus={handleInputOnFocus}
                    disabled={disabled}
                />
                {showError &&
                    <div className='Input__error'>min symbol - {minLenght}</div>
                }
            </div>
        );
    };
}
