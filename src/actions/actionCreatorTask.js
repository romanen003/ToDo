export const addTask = (parentCategory = null, name, description = '', status) => ({
    type: 'ADD_TASK',
    parentCategory,
    name,
    description,
    status
});