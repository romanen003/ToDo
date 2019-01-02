export const dataTodo = [
    {
        type: 'category',
        name:'category 1',
        parentCategory: null
    },
    {
        type: 'category',
        name:'category 2',
        parentCategory: null
    },
    {
        type: 'category',
        name:'category 3',
        parentCategory: null
    },
    {
        type: 'category',
        name:'category 1-1',
        parentCategory: 'category 1'
    },
    {
        type: 'category',
        name:'category 1-1-1',
        parentCategory: 'category 1-1'
    },
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

