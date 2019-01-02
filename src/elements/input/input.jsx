import React, { Component } from 'react';
import { func, string } from 'prop-types';
import './input.css';

export class Input extends Component {
    static propTypes = {
        type: string,
        placeholder: string,
        className: string,
        onChange: func,
        value: string
    };
    static defaultProps = {
        type: 'text',
        placeholder: '',
        className: 'input',
        onChange: ()=>{},
        value: ''
    };

    state = {
        value: ''
    };

    componentWillMount() {
        this.setState(()=>({
            value: this.props.value
            })
        )
    };

    onChangeInput = ({target:{value}}) => {
        this.setState({
            value: value
        });
        this.props.onChange(this.state.value);
    };

    render () {
        const {
            type,
            placeholder,
            className
        } = this.props;

        return (
            <input
                type={type}
                className={className}
                placeholder={placeholder}
                value={this.state.value}
                onChange={this.onChangeInput}
            />
        );
    };
}
