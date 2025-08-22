import { tabacco420Category } from "./tabacco/brands/420";
import { allCategoriesOfTabaccoTopic } from "./tabacco/allCategoriesOfTabaccoTopic";

import type { Category } from "../types/data";

export const allCategoriesData: Category[] = [
  {
    slug: "tabacco",
    title: "Тютюн",
    subcategories: [tabacco420Category],
    products: allCategoriesOfTabaccoTopic.products ? [...allCategoriesOfTabaccoTopic.products] : [],
  },
];
