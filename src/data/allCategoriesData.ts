import {
  electroCygaretteDescriptionContent,
  electroCygaretteProductContent,
  electroCygaretteTypeOfProductContent,
} from "./electronicCigaretteContent";
import { tabaccoPageBrandContent, tabaccoPageContent, tabaccoPageDescriptionContent } from "./tabakContent";
import { liquidsProductContent, liquidsTypeOfProductContent, liquidDescriptionContent } from "./liquidsContent";
import { hookahsTypeOfProductContent, hookahDescriptionContent, hookahProductContent } from "./hookahContent";

export const allCategoriesData = {
  tabacco: {
    title: "Табак",
    typeOfProducts: tabaccoPageBrandContent,
    productContent: tabaccoPageContent,
    description: tabaccoPageDescriptionContent,
  },
  electonnicCigarette: {
    title: "Електронні Сигарети",
    typeOfProducts: electroCygaretteTypeOfProductContent,
    productContent: electroCygaretteProductContent,
    description: electroCygaretteDescriptionContent,
  },
  liquids: {
    title: "Рідини Для Електронних Сигарет",
    typeOfProducts: liquidsTypeOfProductContent,
    productContent: liquidsProductContent,
    description: liquidDescriptionContent,
  },
  hookahs: {
    title: "Кальяни",
    typeOfProducts: hookahsTypeOfProductContent,
    productContent: hookahProductContent,
    description: hookahDescriptionContent,
  },
};
