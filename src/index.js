import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {compose, createStore} from "redux";
import {rootReducer} from "./reducers";

const ROOT = document.getElementById('root');
const composeEnhancers =  process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})  : compose;
const store = createStore (
    rootReducer,
    composeEnhancers()
);


ReactDOM.render (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    ,
    ROOT
);

