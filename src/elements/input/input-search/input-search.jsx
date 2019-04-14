import React, {Component} from 'react';
import classNames from 'classnames';
import {Input, Button} from "../../";

export class SearchInput extends Component{
    constructor(props){
        super(props);

        this.state = {
            value: props.value
        };
    }

    static defaultProps = {
        value: ''
    };

    handleChange = (val) => {
        const {handleChange} = this.props;

        this.setState(() => ({
            value: val
        }),() => {
            if (handleChange){
                handleChange(this.state.value);
            }
        });
    };

    handleClick = () => {
        const {handleChange} = this.props;

        this.setState(() => ({
            value: ""
        }));

        if (handleChange){
            handleChange('');
        }
    };

    render () {
        const {placeholder} = this.props;
        const {value} = this.state;
        const isButtonDisabled = !value.length;

        return (
            <div className={classNames('Search')}>
                <Input
                    onChange={this.handleChange}
                    placeholder={placeholder}
                    value={value}
                />
                <Button.Close
                    disabled={isButtonDisabled}
                    onClick={this.handleClick}
                />
            </div>
        )
    }
}
