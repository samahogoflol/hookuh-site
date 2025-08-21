import { darkLine40grProducts } from "./darkLine";
import { tabacco420Description40gr } from "./description40gr";

import type { Category } from "../../../../../types/data";

export const category420_40g: Category = {
  slug: "tabacco_420_40_gram",
  title: "Кальянний Тютюн 420 (Чотири Двадцять) 40 грам",
  products: [...darkLine40grProducts],
  subcategories: [
    {
      slug: "tabacco_420_dark_line_40_gram",
      title: "Кальянний Тютюн 4:20 Dark Line (Міцна Лінійка) 40 грам",
      products: [...darkLine40grProducts],
    },
  ],
  description: [tabacco420Description40gr],
};
