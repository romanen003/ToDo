import React, { Component } from 'react';
import './header.css';
import {Checkbox, Form, ProgressBar, Search} from "../../elements";

export class Header extends Component {
    render () {
        return (
            <header className='Header'>
                <div className="Grid">
                    <div className="Grid__item">
                        <h3 className="Title">To-Do List</h3>
                    </div>
                    <div className="Grid__item">
                        <div className="Grid">
                            <div className="Grid__item">
                                <Checkbox
                                    text='Show done'
                                />
                            </div>
                            <div className="Grid__item">
                                <Search
                                    placeholder='Search'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Header__progressBar" >
                    <ProgressBar/>
                </div>
                <div className="Header__creatingItems">
                    <div className="Grid">
                        <div className="Grid__item">
                            <Form
                                btnLabel='add category title'
                            />
                        </div>
                        <div className="Grid__item">
                            <Form
                                btnLabel='add task title'
                            />
                        </div>
                    </div>
                </div>
            </header>
        )
    };
}