import React from 'react';
import {string, func, bool} from 'prop-types';
import classNames from 'classnames'
import {Button, Checkbox, Grid} from "../../elements/index";
import './task.scss';

const {Row, Col, T_align} = Grid;

export const Task = ({
     name = '',
     status = false,
     handleSelectTaskClick = () => {},
     handleStatusChange = () => {},
     handleEditClick = () => {}
    }) => {
        const StyleTask = classNames(
            'Task', {
                'Task_complete': status
        });

        return (
            <div className={StyleTask} onClick={handleSelectTaskClick}>
                <Grid>
                    <Row>
                        <Col textAlign={T_align.LEFT}>
                            <Checkbox onChange={handleStatusChange} checked={status} />
                            <p className={classNames("Task__title")}>{name}</p>
                        </Col>
                        <Col textAlign={T_align.RIGHT}>
                            <Button.Edit onClick={handleEditClick}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
};

Task.propTypes = {
    handleEditClick: func,
    handleSelectTaskClick: func,
    handleStatusChange: func,
    name: string,
    status: bool
};
