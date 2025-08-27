import { darkLine100grProducts } from "./darkLine";
import { lightLine100grProducts } from "./lightLine";
import { tabacco420Description100gr } from "./description100gr";

import type { Category } from "../../../../../types/data";

export const category420_100g: Category = {
  slug: "tabacco_420_100_gram",
  title: "Тютюн Для Кальяну 420 (Чотири Двадцять) 100 грам",
  products: [...darkLine100grProducts, ...lightLine100grProducts],
  subcategories: [
    {
      slug: "tabacco_420_darkLine_100_gram",
      title: "Кальянний Тютюн 420(Чотири Двадцять) Dark Line (Міцна Лінійка) 100 грам",
      products: [...darkLine100grProducts],
    },
    {
      slug: "tabacco_420_lightLine_100_gram",
      title: "Кальянний Тютюн 420(Чотири Двадцять) Light Line (Легка Лінійка) 100 грам",
      products: [...lightLine100grProducts],
    },
  ],
  description: tabacco420Description100gr,
};
