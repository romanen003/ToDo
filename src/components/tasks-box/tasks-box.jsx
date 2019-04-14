import React, {Component, Fragment} from 'react';
import connect from "react-redux/es/connect/connect";
import {TaskContainer} from '../task/task-container';
import {updateTask} from "../../actions";

const ALL_DONE = 'alldone';

class TasksBoxContainer extends Component {
    filterData = () => {
        const {
            match: {params: {task, category}, url},
            location: {search},
            tasks
        } = this.props;
        let filteredTasks = [...tasks];

        if(Boolean(url.includes(ALL_DONE))){
            filteredTasks = filteredTasks.filter(
                item =>
                    item.parentCategory === (Number(category) || null)
                    && item.status === true
            )
        }

        if (category){
            filteredTasks = filteredTasks.filter(item => item.parentCategory === Number(category))
        }

        if (task){
            filteredTasks = filteredTasks.filter(item => item.id === Number(task))
        }

        if (search) {
            const correstSearch = search.slice(1);
            filteredTasks = filteredTasks.filter(item => item.name.indexOf(correstSearch) !== -1)
        }

        return filteredTasks;
    };

    render () {
        const {updateTask} = this.props;
        const filterTask = this.filterData();

        return (
            <Fragment>
                {filterTask.map(item =>
                    <TaskContainer
                        item={item}
                        key={item.id}
                        updateTask={updateTask}
                    />)
                }
            </Fragment>
        );
    };
}

export const TasksBox = connect(
    state => ({
        tasks: state.tasks
    }),{
        updateTask
    }
)(TasksBoxContainer);
