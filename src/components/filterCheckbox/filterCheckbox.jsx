import React, { Component } from 'react';
import {Checkbox} from "../../elements";
import {withRouter} from "react-router";

export class FilterCheckboxComponent extends Component {

    handleStatusChange = value => {
        const {history} = this.props;
        let newURL = value ? `${history.location.pathname}/alldone` : history.location.pathname.replace('/alldone','');

        history.push(newURL);
    };

    render () {
        const {history} = this.props;
        const checked = history.location.pathname.includes('alldone');

        return (
            <Checkbox onChange={this.handleStatusChange} checked={checked} text='Show done'/>
        );
    };
}

export const FilterCheckbox = withRouter(FilterCheckboxComponent);