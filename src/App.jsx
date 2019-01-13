import React, { Component, Fragment } from 'react';
import {Header, ContentBox} from "./components/index";


export class App extends Component {
    render () {
        return (
            <Fragment>
                <Header/>
                <ContentBox/>
            </Fragment>
        )
    }
}