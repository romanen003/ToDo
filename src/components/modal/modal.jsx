import React, { Component } from 'react';

import './modal.css';

export class Modal extends Component {
    render() {
        return (
            <div className='modal'>
                {this.props.children}
            </div>
        )
    }
}