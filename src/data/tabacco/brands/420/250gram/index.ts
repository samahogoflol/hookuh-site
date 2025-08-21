import { darkLine250grProducts } from "./darkLine";
import { lightLine250grProducts } from "./lightLine";
import { tabacco420Description250gr } from "./description250gr";

import type { Category } from "../../../../../types/data";

export const category420_250g: Category = {
  slug: "tabacco_420_250_gram",
  title: "Кальянний Тютюн 420 (Чотири Двадцять) 250 г",
  products: [...darkLine250grProducts, ...lightLine250grProducts],
  subcategories: [
    {
      slug: "tabacco_420_darkLine_250gram",
      title: "Кальянний Тютюн 420(Чотири Двадцять) Dark Line (Міцна Лінійка) 250 грам",
      products: [...darkLine250grProducts],
    },
    {
      slug: "tabacco_420_lightLine_250gram",
      title: "Кальянний Тютюн 420(Чотири Двадцять) Light Line (Легка Лінійка) 250 грам",
      products: [...lightLine250grProducts],
    },
  ],
  description: [tabacco420Description250gr],
};
