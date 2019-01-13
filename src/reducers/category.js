import {ACTION_CATEGORY} from "../constants";

export const CATEGORY = [
    {
        name:'category 1',
        parentCategory: null,
        id: 1
    },
    {
        name:'category 2',
        parentCategory: null,
        id: 2
    },
    {
        name:'category 3',
        parentCategory: null,
        id: 3
    },
    {
        name:'category 1-1',
        parentCategory: 1,
        id: 4
    },
    {
        name:'category 1-1-1',
        parentCategory: 4,
        id: 5
    }
];

let idCategory = 6;

export const category = (state = CATEGORY, {type, payload: item}) => {
    switch (type) {
        case ACTION_CATEGORY.ADD:
            return [...state,{
                ...item,
                id: idCategory++
            }];
        case ACTION_CATEGORY.REMOVE:
            return [...state].filter(category => category !== item);
        case ACTION_CATEGORY.UPDATE:
            return [...state].map(category => category.id === item.id ? item : category);
        default:
            return state;
    }
};