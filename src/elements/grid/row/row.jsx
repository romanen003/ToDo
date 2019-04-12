import React, {Component} from 'react';
import classNames from 'classnames';
import './row.scss';

export const MARGIN_TOP = {
    X8: '8px',
    X12: '12px',
    X16: '16px',
};

export const MARGIN = {
    X8: '8px',
    X12: '12px',
    X16: '16px',
};

const V_ALIGN = {
    TOP: 'top',
    BOTTOM: 'bottom'
};

export class Row extends Component {
    render() {
        const {children, marginTop, margin, vertAlign} = this.props;
        const rowClassName = classNames(
            'row',{
                'row-margin-top-8': marginTop === MARGIN_TOP.X8,
                'row-margin-top-12': marginTop === MARGIN_TOP.X12,
                'row-margin-top-16': marginTop === MARGIN_TOP.X16,
                'row-margin-8': margin === MARGIN.X8,
                'row-margin-12': margin === MARGIN.X12,
                'row-margin-16': margin === MARGIN.X16,
                'row-vert-align-top': vertAlign === V_ALIGN.TOP,
                'row-vert-align-bottom': vertAlign === V_ALIGN.BOTTOM
            }
        );

        return (
            <div className={rowClassName}>
                {children}
            </div>
        )
    }
}
