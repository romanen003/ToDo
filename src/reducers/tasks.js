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

export const tasks = (state = TASKS, {type,payload: item}) => {
    switch (type) {
        case 'ADD_TASK':
            return [
                ...state,{
                ...item,id: TASKS.id++
                }];
        case 'UPDATE_TASK' :
            return [
                ...state.map(task => task.id !== item.id ? task : item),
            ];
        default:
            return state;
    }
};