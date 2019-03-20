import {ACTION_ACTIVE} from './constants';

export const ACTIVE = {
    selectedCategory: null,
    activeCategory: null,
    transferCategory: null
};

export const activeState = (state = ACTIVE, {type, payload: id}) => {
    switch (type) {
        case ACTION_ACTIVE.UPDATE_SELECT:
            return {...state,selectedCategory :  id === state.selectedCategory ? null : id };
        case ACTION_ACTIVE.UPDATE__ACTIVE:
            return {...state, activeCategory:  id !== state.activeCategory ? id : null };
        case ACTION_ACTIVE.UPDATE_TRANSFER:
            return {...state, transferCategory :  id === state.transferCategory ? null : id };
        default:
            return state;
    }
};
