import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import {TasksBox} from "..";
import {CategoryBoxContainer} from '../category-box/categoryBox';
import TaskEditContainer from '../taskEdit/taskEditContainer';
import './content-box.css';
import {Grid} from "../../elements/grid/grid";

const {Row, Col, Margin_Top, V_align} = Grid;


export class ContentBox extends Component {
    render () {

        return (
            <Grid>
                <Row marginTop={Margin_Top.X16} vertAlign={V_align.TOP}>
                    <Col vertAlign={V_align.TOP}>
                        <div className="BoxContent">
                            <Switch>
                                <Route exact path='/category:category?*' component={CategoryBoxContainer}/>
                                <Route path='/task:id?/edit' component={CategoryBoxContainer}/>
                                <Route exact component={CategoryBoxContainer}/>
                            </Switch>
                        </div>
                    </Col>
                    <Col vertAlign={V_align.TOP}>
                        <div className="BoxContent">
                            <Switch>
                                <Route path='/category:category/alldone' component={TasksBox}/>
                                <Route path='/category:category' component={TasksBox}/>
                                <Route exact path='/task:id?/edit' component={TaskEditContainer}/>
                                <Route exact path='/task:id?' component={TasksBox}/>
                                <Route path='/' component={TasksBox}/>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    };
}

