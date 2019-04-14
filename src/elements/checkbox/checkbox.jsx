import React, {Component} from 'react';
import {string} from 'prop-types';
import classNames from 'classnames';
import './checkbox.scss';

const CHECKBOX = "checkbox";

export class Checkbox extends Component {
    static propTypes = {
        text: string
    };
    static defaultProps = {
        text: '',
        handleStatusChange: () => {}
    };

    constructor (props) {
        super(props);

        this.state = {
            isChecked: props.checked
        }
    };

    handleCheckChange  = () => {
        this.setState((state)=>({
            isChecked: !state.isChecked
        }),
        ()=>{this.props.onChange(this.state.isChecked)});
    };

    handleClick = (event) => {
        event.stopPropagation()
    };

    render () {
        const {text} = this.props;
        const {isChecked} = this.state;

        return (
            <label className={classNames("checkbox")} onClick={this.handleClick}>
                <input
                    className={classNames('checkbox__input')}
                    type={CHECKBOX}
                    checked={isChecked}
                    onChange={this.handleCheckChange}
                />
                <div className={classNames("checkbox__text")}>{text}</div>
            </label>
        );
    };
}
