import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import classNames from 'classnames';
import {Switch, Route, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {FilterCheckbox} from "..";
import {Form, Input, ProgressBar, Grid} from "../../elements";
import {addTask, addCategory, setActiveCategory} from "../../actions";
import './header.scss';

const {Row, Col, Margin} = Grid;
const PLACEHOLDERS = {
    SEARCH: 'Search tasks',
    CATEGORY: 'add category title',
    TASK: 'add task title'
};
const BUTTON_LABEL = 'add';

class HeaderContainer extends Component {
    handleAddCategoryClick = (value) => {
        const {addCategory, active, setActiveCategory} = this.props;
        const item = {
            name: value,
            parentCategory: active
        };

        addCategory(item);
        setActiveCategory(null);
    };

    handleAddTaskClick = (value) => {
        const {addTask, active, setActiveCategory} = this.props;
        const item = {
            name: value,
            parentCategory: active
        };

        addTask(item);
        setActiveCategory(null);
    };

    handleChangeInput = (value) => {
        const {history} = this.props;

        history.push(`${history.location.pathname}?${value}`);
    };

    render () {
        const {tasks} = this.props;
        const result = ((
            tasks.filter(
                item => item.status === true
            ).length)/tasks.length
        )*100;

        return (
            <header>
                <Grid>
                    <Row marginTop={Margin.X8}>
                        <Col>
                            <NavLink to='/' className={classNames("Title")}>To-Do List</NavLink>
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
                                        <Input.Search
                                            placeholder={PLACEHOLDERS.SEARCH}
                                            handleChange={this.handleChangeInput}
                                        />
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
                                placeholder={PLACEHOLDERS.CATEGORY}
                                btnLabel={BUTTON_LABEL}
                                onClick={this.handleAddCategoryClick}
                                minLenght={4}
                            />
                        </Col>
                        <Col>
                            <Form
                                placeholder={PLACEHOLDERS.TASK}
                                btnLabel={BUTTON_LABEL}
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

export const Header = withRouter( connect(state => ({
    tasks: state.tasks,
    category: state.category,
    active: state.activeState.activeCategory
}),{
    addTask,
    addCategory,
    setActiveCategory
})(HeaderContainer));
