import React, {Component} from 'react';
import classNames from 'classnames';
import './row.scss';

export const MARGIN = {
    X8: '8px',
    X12: '12px',
    X16: '16px',
};

export class Row extends Component {
    render() {
        const {children, marginTop} = this.props;
        const rowClassName = classNames(
            'row',{
                'row-margin-8': marginTop === MARGIN.X8,
                'row-margin-12': marginTop === MARGIN.X12,
                'row-margin-16': marginTop === MARGIN.X16
            }
        );

        return (
            <div className={rowClassName}>
                {children}
            </div>
        )
    }
}
