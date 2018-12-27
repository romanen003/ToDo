import React, { Component } from 'react';
import { string, number } from 'prop-types';
import './textarea.css';

export class TextArea extends Component {
    static propTypes = {
        className: string,
        rows: number
    };
    static defaultProps = {
        className: 'textarea',
        rows: 30
    };
    state = {
        value: ''
    };

    componentWillMount() {
        this.setState(()=>({
                value: this.props.value
            }))
    };

    onAreaChange = (event) => {
        event.persist ()
        this.setState(()=>({
            value: event.target.value
        }));
    };

    
    render () {
        const {
            className,
            rows,
            defaultValue
        } = this.props;

        return (
            <textarea
                className={className}
                rows={rows}
                defaultValue={defaultValue}
                onChange={this.onAreaChange}
                value={this.state.value}
            />
        );
    };
}