import React, { Component } from 'react';
import {func, bool, string} from 'prop-types';
import './checkbox.css';

export class Checkbox extends Component {
    static propTypes = {
        text: string
    };
    static defaultProps = {
        text: ''
    };
    state = {
        isChecked: false
    };
    componentDidMount() {
        this.setState(()=>({
            isChecked: this.props.checked
        }))
    }

    handleCheckClick = () => {
        this.setState(()=>({
            isChecked: !this.state.isChecked
        }))
    };
    render () {
        const {text} = this.props;
        const {isChecked} = this.state;

        return (
            <label className="checkbox">
                <input
                    className='checkbox__input'
                    type="checkbox"
                    checked={isChecked}
                    onClick={this.handleCheckClick}
                />
                <div className="checkbox__text">{text}</div>
            </label>
        );
    };
}