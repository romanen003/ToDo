import {ACTION_ACTIVE} from '../constants';


export const updateActive = id => ({type: ACTION_ACTIVE.UPDATE__ACTIVE, payload: id});

export const updateSelect = id => ({type: ACTION_ACTIVE.UPDATE_SELECT, payload: id});

export const updateTransfer = id => ({type: ACTION_ACTIVE.UPDATE_TRANSFER, payload: id});