import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Checkbox} from "../../elements";

const ALL_DONE = 'alldone';

class FilterCheckboxComponent extends Component {
    handleStatusChange = value => {
        const {history, history :{
            location : {
                pathname
            }}} = this.props;
        let newURL = value
            ? `${pathname}/${ALL_DONE}`
            : pathname.replace(`/${ALL_DONE}`,'');

        history.push(newURL);
    };

    render () {
        const {history} = this.props;
        const checked = history.location.pathname.includes(ALL_DONE);

        return (
            <Checkbox onChange={this.handleStatusChange} checked={checked} text='Show done'/>
        );
    };
}

export const FilterCheckbox = withRouter(FilterCheckboxComponent);
