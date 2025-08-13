import {
  electroCygaretteDescriptionContent,
  electroCygaretteProductContent,
  electroCygaretteTypeOfProductContent,
} from "./electronicCigaretteContent";

import { tabaccoPageBrandContent, tabaccoPageContent, tabaccoPageDescriptionContent } from "./tabakContent";

export const allCategoriesData = {
  tabacco: {
    title: "Тютюн",
    typeOfProducts: tabaccoPageBrandContent,
    productContent: tabaccoPageContent,
    description: tabaccoPageDescriptionContent,
  },
  electonicCygarette: {
    title: "Електронні Сигарети",
    typeOfProducts: electroCygaretteTypeOfProductContent,
    productContent: electroCygaretteProductContent,
    description: electroCygaretteDescriptionContent,
  },
};
