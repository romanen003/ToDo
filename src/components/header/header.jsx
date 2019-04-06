import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";
import {addTask} from "../../actions/actionTask";
import {addCategory} from "../../actions/actionCategory";
import NavLink from "react-router-dom/es/NavLink";
import {FilterCheckbox} from "..";
import {Form, Input, ProgressBar} from "../../elements";
import './header.css';
import '../../elements/style.css'
import {updateActive} from "../../actions/actionActiveComponent";
import Switch from "react-router/es/Switch";
import Route from "react-router/es/Route";
import {Grid} from "../../elements/grid/grid";

const {Row, Col, Margin, V_align} = Grid;


export class HeaderContainer extends Component {

    handleAddCategoryClick = (value) => {
        const { addCategory, active, updateActive } = this.props;
        const item = {
            name: value,
            parentCategory: active
        };

        addCategory(item);
        updateActive(null);
    };

    handleAddTaskClick = (value) => {
        const {addTask, active, updateActive } = this.props;
        const item = {
            name: value,
            description: '',
            status: false,
            parentCategory: active
        };

        addTask (item);
        updateActive(null);
    };

    render () {
        const {tasks} = this.props;
        const result = ((tasks.filter(item => item.status === true).length)/tasks.length)*100;

        return (
            <header>
                <Grid>
                    <Row marginTop={Margin.X8}>
                        <Col>
                            <NavLink to='/' className="Title">To-Do List</NavLink>
                        </Col>
                        <Col>
                            <Grid>
                                <Row>
                                    <Col>
                                        <Switch>
                                            <Route path='/category:category' component={FilterCheckbox} />
                                        </Switch>
                                    </Col>
                                    <Col>
                                        <Input.Search placeholder='Search' />
                                    </Col>
                                </Row>
                            </Grid>
                        </Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row marginTop={Margin.X8}>
                        <ProgressBar proc={result} />
                    </Row>
                </Grid>
                <Grid>
                    <Row marginTop={Margin.X16}>
                        <Col>
                            <Form
                                placeholder='add category title'
                                btnLabel='add'
                                onClick={this.handleAddCategoryClick}
                                minLenght={4}
                            />
                        </Col>
                        <Col>
                            <Form
                                placeholder='add task title'
                                btnLabel='add'
                                onClick={this.handleAddTaskClick}
                                minLenght={4}
                            />
                        </Col>
                    </Row>
                </Grid>
            </header>
        )
    };
}

export const Header = connect(state => ({
    tasks: state.tasks,
    category: state.category,
    active: state.activeState.activeCategory
}),{ addTask, addCategory, updateActive })(HeaderContainer);
