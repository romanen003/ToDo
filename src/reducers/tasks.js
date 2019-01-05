export const TASKS = [
    {
        name:'task 1',
        description: 'test',
        status: false,
        parentCategory: 'category0',
        id: 'task0'
    },
    {
        name:'task 2',
        description: 'test',
        status: false,
        parentCategory: 'category0',
        id: 'task1'
    },
    {
        name:'task 3',
        description: 'test',
        status: false,
        parentCategory: 'category0',
        id: 'task2'
    },
];
TASKS.id = 3;

export const tasks = (state = TASKS, {type,item}) => {
    switch (type) {
        case 'ADD_TASK':
            return [
                ...state,{
                ...item,id: `task${TASKS.id++}`
                }];
        case 'UPDATE_TASK' :
            return [
                ...state.map(task => task.id !== item.id ? task : item),
            ];
        default:
            return state;
    }
};