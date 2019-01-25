import React, {Component} from 'react';
import {Header, ContentBox} from "./components/index";
import {MyLayout} from "./elements/";


export class App extends Component {
    render () {
        return (
            <MyLayout>
                <Header/>
                <ContentBox/>
            </MyLayout>
        )
    }
}