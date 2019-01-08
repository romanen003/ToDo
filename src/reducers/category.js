export const CATEGORY = [
    {
        name:'category 1',
        parentCategory: null,
        id: 1
    },
    {
        name:'category 2',
        parentCategory: null,
        id: 2
    },
    {
        name:'category 3',
        parentCategory: null,
        id: 3
    },
    {
        name:'category 1-1',
        parentCategory: 1,
        id: 4
    },
    {
        name:'category 1-1-1',
        parentCategory: 4,
        id: 5
    }
];
CATEGORY.id = 6;
CATEGORY.active = null;

export const category = (state = CATEGORY, {type, item}) => {
    switch (type) {
        case 'ADD_CATEGORY':
            const data1 = [...state,{
                    ...item,
                    id: CATEGORY.id++,
                    parentCategory: state.active
                }];
            data1.active = state.active;
            return data1;
        case 'REMOVE_CATEGORY':
            return [...state].filter(category => category !== item);
        case 'RENAME_CATEGORY':
            return [...state].map(category =>
            category.id === item.id ? item : category);
        case 'ACTIVE_CATEGORY':
            const data = [...state];
            data.active = item.id === state.active ? null : item.id;
            return data;
        default:
            return state;
    }
};