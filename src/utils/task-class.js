import {FIRST_ID} from "./";

export class Task {
    constructor({
        name,
        description = '',
        parentCategory = null,
        status = false
    }){
        this.name = name;
        this.description = description;
        this.status = status;
        this.parentCategory = parentCategory;
        this.id = Task.getUnicId();
    }

    static ID = FIRST_ID;

    static getUnicId = () => Task.ID++;
}