export const TASKS = [
    {
        type: 'task',
        name:'task 1',
        description: 'test',
        status: false,
        parentCategory: 'category 1'
    },
    {
        type: 'task',
        name:'task 2',
        description: 'test',
        status: false,
        parentCategory: 'category 1'
    },
    {
        type: 'task',
        name:'task 3',
        description: 'test',
        status: false,
        parentCategory: 'category 1'
    },
];

export const tasks = (state = TASKS, {parentCategory, name, status, description, type }) => {
    switch (type) {
        case 'ADD__TASK':
            return [
                ...state,{
                parentCategory: parentCategory,
                name: name,
                status: status,
                description: description
                }
            ];
        default:
            return state;
    }
};