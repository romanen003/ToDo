export const addTask = (parentCategory, name, description = '', status) => ({
    type: 'ADD_TASK',
    parentCategory,
    name,
    description,
    status
});