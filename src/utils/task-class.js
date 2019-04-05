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
        this.id = Task.getUniqId();
    }

    static ID = FIRST_ID;

    static getUniqId = () => Task.ID++;
}
