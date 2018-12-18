import React, { Component } from 'react';
import {func, bool, string, number} from 'prop-types';
import './progressBar.css';

export class ProgressBar extends Component {
    static propTypes = {
        proc: number
    };
    static defaultProps = {
        proc: 10
    };

    render () {
        const progress = {width:`${this.props.proc}%`};
        return (
            <div className='progressBar'>
                <div
                    className="progressBar__line"
                    style={progress}
                ></div>
            </div>
        );
    };
}