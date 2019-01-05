export const addCategory = item => ({
    type: 'ADD_CATEGORY',
    item
});

export const removeCategory = item => ({
    type: 'REMOVE_CATEGORY',
    item
});
export const renameCategory = item => ({
    type: 'RENAME_CATEGORY',
    item
});