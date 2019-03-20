export const deleteTasks = (array, item) => {
    if (item.parentCategory === null) {
        return [
            ...array.filter(task => task.parentCategory !== item.id)
        ]
    }
    const newData = array.filter(task => task.parentCategory !== item.id);
    deleteTasks(newData,item);
};