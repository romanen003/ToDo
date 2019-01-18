import {ACTION_TASK} from '../constants';

export const TASKS = [
    {
        name:'task 1',
        description: 'test',
        status: false,
        parentCategory: 1,
        id: 1
    },
    {
        name:'task 2',
        description: 'test',
        status: false,
        parentCategory: 1,
        id: 2
    },
    {
        name:'task 3',
        description: 'test',
        status: false,
        parentCategory: 1,
        id: 3
    },{
        name:'task 4',
        description: 'test',
        status: false,
        parentCategory: null,
        id: 4
    }
];
TASKS.id = 5;

const deleteTasks = (array, item) => {
    if (item.parentCategory === null) {
        return [
            ...array.filter(task => task.parentCategory !== item.id)
        ]
    }
    const newData = array.filter(task => task.parentCategory !== item.id);
    deleteTasks(newData,item);
};

export const tasks = (state = TASKS, {type,payload: item}) => {
    switch (type) {
        case ACTION_TASK.ADD:
            return [
                ...state,{
                ...item,id: TASKS.id++
                }];
        case ACTION_TASK.UPDATE :
            return [
                ...state.map(task => task.id !== item.id ? task : item),
            ];
        case ACTION_TASK.DELETE_CATEGORYS_TASKS :
            return deleteTasks(state,item);
        default:
            return state;
    }
};