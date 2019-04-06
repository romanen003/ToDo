import React, {Component} from 'react';
import classNames from 'classnames';
import './col.scss';

export const T_ALIGN = {
    LEFT: 'left',
    RIGHT: 'right'
};

export const V_ALIGN = {
    TOP: 'top',
    BOTTOM: 'bottom'
};

export class Col extends Component {
    render() {
        const {
            children,
            textAlign,
            vertAlign
        } = this.props;
        const rowClassName = classNames(
            'col', {
                'col_t-align-left': textAlign === T_ALIGN.LEFT,
                'col_t-align-right': textAlign === T_ALIGN.RIGHT,
                'col_v-align-top': vertAlign === V_ALIGN.TOP,
                'col_v-align-bottom': vertAlign === V_ALIGN.BOTTOM
            }
        );

        return (
            <div className={rowClassName}>
                {children}
            </div>
        )
    }
}
