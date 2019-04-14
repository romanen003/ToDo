import React, { Component } from 'react';
import {array} from 'prop-types';
import {Button, Checkbox, Grid, Input, TextArea} from "../../elements";
import './task-edit.scss';

const {Row, Col, Margin_Top, T_align} = Grid;


export class TaskEdit extends Component {
    static propTypes = {
        tasks: array
    };
    static defaultProps = {
        tasks: []
    };

    render () {
        const {
            handleChangeSaved,
            handleCancelledClick,
            handleNameChange,
            handleStatusChange,
            handleDescriptionChange,
            task: {name, status, description},
            showError
        } = this.props;

        return (
            <Grid>
                <Row marginTop={Margin_Top.X16}>
                    <Col textAlign={T_align.LEFT}>
                        <Input
                            placeholder='Task'
                            value={name}
                            onChange={handleNameChange}
                            showError={showError}
                        />
                    </Col>
                    <Col textAlign={T_align.RIGHT}>
                        <Button
                            label='Save changes'
                            onClick={handleChangeSaved}
                        />
                        <Button
                            label='Cancel'
                            onClick={handleCancelledClick}
                        />
                    </Col>
                </Row>
                <Row marginTop={Margin_Top.X16}>
                    <Col textAlign={T_align.LEFT}>
                        <Checkbox
                            text='Done'
                            checked={status}
                            onChange={handleStatusChange}
                        />
                    </Col>
                </Row>
                <Row marginTop={Margin_Top.X16}>
                    <Col>
                        <TextArea
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                    </Col>
                </Row>
            </Grid>
        );
    };
}
