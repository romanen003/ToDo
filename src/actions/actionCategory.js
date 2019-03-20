import {ACTION_CATEGORY} from '../reducers/category/constants';

export const addCategory = item => ({
    type: ACTION_CATEGORY.ADD,
    payload: item
});

export const removeCategory = item => ({
    type: ACTION_CATEGORY.REMOVE,
    payload: item
});

export const renameCategory = item => ({
    type: ACTION_CATEGORY.UPDATE,
    payload: item
});

export const activeCategory = item => ({
    type: ACTION_CATEGORY.TRANSFER,
    payload: item
});
