export const DEFAULT_CATEGORY = [
    {
        name: 'category 1'
    },
    {
        name: 'category 2'
    },
    {
        name: 'category 3'
    },
    {
        name: 'category 1-1',
        parentCategory: 1
    },
    {
        name: 'category 1-1-1',
        parentCategory: 4
    }
];

export const ACTION_CATEGORY = {
    ADD: 'ADD_CATEGORY',
    REMOVE: 'REMOVE_CATEGORY',
    UPDATE: 'RENAME_CATEGORY',
    TRANSFER: 'ACTIVE_CATEGORY'
};