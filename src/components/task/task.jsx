import React from 'react';
import {string, func, bool} from 'prop-types';
import classNames from 'classnames'
import {Button, Checkbox, Grid} from "../../elements/index";
import './task.css';
import '../../elements/style.css';

const {Row, Col, T_align} = Grid;

export const Task = ({
     name = '',
     status = false,
     handleSelectTaskClick = () => {},
     handleStatusChange = () => {},
     handleEditClick = () => {},
     withTaskRef
    }) => {
        const StyleTask = classNames(
            'Task', {
                'Todo_complete': status
        });

        return (
            <div className={StyleTask} onClick={handleSelectTaskClick} ref={withTaskRef}>
                <Grid>
                    <Row>
                        <Col textAlign={T_align.LEFT}>
                            <Checkbox onChange={handleStatusChange} checked={status} />
                            <div className="Task__title">{name}</div>
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
