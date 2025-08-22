import { darkLine40grProducts } from "./brands/420/40gram/darkLine";
import { darkLine100grProducts } from "./brands/420/100gram/darkLine";
import { lightLine100grProducts } from "./brands/420/100gram/lightLine";
import { darkLine250grProducts } from "./brands/420/250gram/darkLine";
import { lightLine250grProducts } from "./brands/420/250gram/lightLine";
import type { Category } from "../../types/data";

export const allCategoriesOfTabaccoTopic: Category = {
  products: [
    ...darkLine40grProducts,
    ...darkLine100grProducts,
    ...lightLine100grProducts,
    ...darkLine250grProducts,
    ...lightLine250grProducts,
  ],
};
