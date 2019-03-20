import {Category} from "../../utils";
import {DEFAULT_CATEGORY, ACTION_CATEGORY} from './constants';


export const CATEGORY = DEFAULT_CATEGORY.map(category => new Category(category));

export const category = (state = CATEGORY, {type, payload: item}) => {
    switch (type) {
        case ACTION_CATEGORY.ADD:
            return [
                ...state,
                new Category(item)
            ];
        case ACTION_CATEGORY.REMOVE:
            return [...state].filter(category => category !== item);
        case ACTION_CATEGORY.UPDATE:
            return [...state].map(category => category.id === item.id ? item : category);
        default:
            return state;
    }
};