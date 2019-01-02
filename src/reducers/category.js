export const CATEGORY = [
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
    }
];

export const category = (state = CATEGORY, {parentCategory, name, type }) => {
    switch (type) {
        case 'ADD__CATEGORY':
            return [
                ...state,{
                    parentCategory: parentCategory,
                    name: name
                }
            ];
        default:
            return state;
    }
};