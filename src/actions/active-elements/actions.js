import {ACTION_ACTIVE} from '../../reducers/category-state/constants';

export const setActiveCategory = id => ({
    type: ACTION_ACTIVE.UPDATE__ACTIVE,
    payload: id
});

export const setSelectCategory = id => ({
    type: ACTION_ACTIVE.UPDATE_SELECT,
    payload: id
});

export const setTransferCategory = id => ({
    type: ACTION_ACTIVE.UPDATE_TRANSFER,
    payload: id
});
