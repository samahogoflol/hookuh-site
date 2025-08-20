import { category420_40g } from "./40gram";
import { category420_100g } from "./100gram";
import { category420_250g } from "./250gram";
import { darkLine40grProducts } from "./40gram/darkLine";
import { darkLine100grProducts } from "./100gram/darkLine";
import { darkLine250grProducts } from "./250gram/darkLine";
import { lightLine100grProducts } from "./100gram/lightLine";
import { lightLine250grProducts } from "./250gram/lightLine";

import type { Category } from "../../../../types/data";

export const tabacco420Category: Category = {
  slug: "tabacco_420",
  title: "Кальянний Тютюн 420(Чотири Двадцять)",
  products: [
    ...darkLine100grProducts,
    ...lightLine100grProducts,
    ...darkLine40grProducts,
    ...darkLine250grProducts,
    ...lightLine250grProducts,
  ],
  subcategories: [category420_40g, category420_100g, category420_250g],
};
