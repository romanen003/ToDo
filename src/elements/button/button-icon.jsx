import React from 'react';
import {Button} from './button';
import edit from '../../img/edit.svg';
import confirm from '../../img/confirm.svg';
import close from '../../img/close.svg';
import delet from '../../img/delete.svg';
import transfer from '../../img/transfer.svg';
import add from '../../img/add.svg';
import clear from '../../img/clear.svg';
import list from '../../img/list.svg';
import top from '../../img/top.svg';

const  createButtonIcon = (typeIcon) => (props) =>
    <Button {...props} icon>
        <img src={typeIcon} alt={typeIcon} />
    </Button>
;

const ICON = {
    EDIT: edit,
    CONFIRM: confirm,
    CLOSE: close,
    DELETE: delet,
    TRANSFER: transfer,
    ADD: add,
    CLEAR: clear,
    LIST: list,
    TOP: top
};

export const BUTTONS_WITH_ICONS = {
    EDIT: createButtonIcon(ICON.EDIT),
    CONFIRM: createButtonIcon(ICON.CONFIRM),
    CLOSE: createButtonIcon(ICON.CLOSE),
    DELETE: createButtonIcon(ICON.DELETE),
    ADD: createButtonIcon(ICON.ADD),
    TRANSFER: createButtonIcon(ICON.TRANSFER),
    CLEAR: createButtonIcon(ICON.CLEAR),
    LIST: createButtonIcon(ICON.LIST),
    TOP: createButtonIcon(ICON.TOP)
};
