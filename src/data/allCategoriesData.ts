import { tabacco420Category } from "./tabacco/brands/420";
import { allCategoriesOfTabaccoTopic } from "./tabacco/allCategoriesOfTabaccoTopic";
import { tabaccoPageDescriptionContent } from "./tabacco/tabaccoDescription";

import type { Category } from "../types/data";

export const allCategoriesData: Category[] = [
  {
    slug: "tabacco",
    title: "Тютюн",
    subcategories: [tabacco420Category],
    products: allCategoriesOfTabaccoTopic.products ? [...allCategoriesOfTabaccoTopic.products] : [],
    description: tabaccoPageDescriptionContent,
  },
];
