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
        disabled: bool
    };
    static defaultProps = {
        type: 'text',
        placeholder: '',
        className: 'input',
        onChange: ()=>{},
        value: '',
        disabled: false
    };

    constructor (props) {
        super(props);

        this.state = {
            value: this.props.value
        };
    };

    onChangeInput = ({target:{value}}) => {
        this.props.onChange(this.state.value);
        this.setState(() => ({
            value
        }));
    };

    render () {
        const {
            type,
            placeholder,
            className,
            disabled,
            handleInputRef
        } = this.props;

        return (
            <input
                type={type}
                className={className}
                placeholder={placeholder}
                value={this.state.value}
                onChange={this.onChangeInput}
                ref={handleInputRef}
                disabled={disabled}
            />
        );
    };
}
