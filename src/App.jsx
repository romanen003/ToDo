import React, { Component, Fragment } from 'react';
import {Header, ContentBox} from "./components/index";
import {Route} from "react-router";


export class App extends Component {
    render () {
        return (
            <Fragment>
                <Header/>
                {/*<Route exact path='/' component={ContentBox}/>*/}
                <Route path='/:category?/:task?' component={ContentBox}/>
            </Fragment>
        )
    }
}