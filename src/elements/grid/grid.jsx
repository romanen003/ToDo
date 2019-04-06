import React, {Component} from 'react';
import classNames from 'classnames';
import './grid.scss';
import {MARGIN, Row} from "./row/row";
import {Col, T_ALIGN, V_ALIGN} from "./col/col";

export class Grid extends Component{
    static Row = Row;
    static Col = Col;
    static Margin = MARGIN;
    static T_align = T_ALIGN;
    static V_align = V_ALIGN;

    render() {
        const {children} = this.props;

        return (
            <div className={classNames('Grid')}>
                {children}
            </div>
        )
    }
}
