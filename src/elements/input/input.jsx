import React, { Component } from 'react';
import { func, string, bool, number } from 'prop-types';

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
        handleInputOnFocus: func,
        minLenght: number
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
        minLenght: 4
    };

    constructor (props) {
        super(props);

        this.state = {
            value: this.props.value
        };
    };


    handleChangeInput = ({target: {value}}) => {
       this.setState(() => ({
            value: value
        }),
           ()=>{this.props.onChange(this.state.value)});
    };

    handleInputKeyDown = (event) => {
        if (event.keyCode === 13){
            this.props.handleInputKeyDown(this.state.value)
        }
    };

    render () {
        const {
            type,
            placeholder,
            className,
            disabled,
            showError,
            minLenght,
            handleInputOnFocus
        } = this.props;

        return (
            <div className='Input'>
                <input
                    type={type}
                    className={className}
                    placeholder={placeholder}
                    value={this.state.value}
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
