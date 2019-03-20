import {FIRST_ID} from "./constants";

export const Category = function ({
  name,
  parentCategory = null,
}) {
    this.name = name;
    this.parentCategory = parentCategory;
    this.id = Category.getUnicId();
};

Category.id = FIRST_ID;
Category.getUnicId = function () {
    return this.id++
};