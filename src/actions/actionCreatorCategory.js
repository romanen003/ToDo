export const addCategory= (parentCategory = null, name, status) => ({
    type: 'ADD__CATEGORY',
    parentCategory,
    name
});