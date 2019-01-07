import React, { Component } from 'react';
import {Checkbox} from "../../elements";
import {withRouter} from "react-router";

export class FilterCheckboxComponent extends Component {

    handleStatusChange = (value) => {
        // const {history} = this.props;
        // value ?
        //     history.push('/alldone')
        //     :
        //     history.push('/')
    };

    render () {


        return (
            <Checkbox onChange={this.handleStatusChange} text='Show done'/>
        );
    };
};

export const FilterCheckbox = withRouter(FilterCheckboxComponent);