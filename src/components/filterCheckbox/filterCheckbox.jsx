import React, { Component } from 'react';
import {Checkbox} from "../../elements";
import {withRouter} from "react-router";

export class FilterCheckboxComponent extends Component {

    handleStatusChange = (value) => {
        const {history, match} = this.props;
        let newURL = match.url.includes('alldone') ? match.url : `${match.url}?alldone`;

        history.push(newURL);
    };

    render () {


        return (
            <Checkbox onChange={this.handleStatusChange} text='Show done'/>
        );
    };
};

export const FilterCheckbox = withRouter(FilterCheckboxComponent);