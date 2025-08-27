import { category420_40g } from "./40gram";
import { category420_100g } from "./100gram";
import { category420_250g } from "./250gram";
import { darkLine40grProducts } from "./40gram/darkLine";
import { darkLine100grProducts } from "./100gram/darkLine";
import { darkLine250grProducts } from "./250gram/darkLine";
import { lightLine100grProducts } from "./100gram/lightLine";
import { lightLine250grProducts } from "./250gram/lightLine";
import { totalDescriptionPage420 } from "./totalDescriptionPage420";
import { tabacco420Description40gr } from "./40gram/description40gr";
import { tabacco420Description100gr } from "./100gram/description100gr";
import { tabacco420Description250gr } from "./250gram/description250gr";

import type { Category } from "../../../../types/data";

import logo_420 from "../../../../imgs/logotypes/4_20_logo.webp";

export const tabacco420Category: Category = {
  slug: "tabacco_420",
  title: "Кальянний Тютюн 420(Чотири Двадцять)",
  description: totalDescriptionPage420,
  imgUrl: logo_420,
  categoryName: "Кальянний Тютюн 420(Чотири Двадцять)",
  products: [
    ...darkLine100grProducts,
    ...lightLine100grProducts,
    ...darkLine40grProducts,
    ...darkLine250grProducts,
    ...lightLine250grProducts,
  ],
  subcategories: [
    {
      slug: "tabacco_420_40_gram",
      title: "Тютюн 420(Чотири Двадцять) 40 грам",
      products: [...darkLine40grProducts],
      imgUrl: logo_420,
      subcategories: [category420_40g],
      description: tabacco420Description40gr,
    },
    {
      slug: "tabacco_420_100_gram",
      title: "Тютюн 420(Чотири Двадцять) 100 грам",
      products: [...darkLine100grProducts, ...lightLine100grProducts],
      imgUrl: logo_420,
      description: tabacco420Description100gr,
      subcategories: [
        {
          slug: "tabacco_420_darkLine_100_gram",
          title: "Тютюн 420(Чотири Двадцять) Dark Line 100 гр",
          products: [...darkLine100grProducts],
          imgUrl: logo_420,
        },
        {
          slug: "tabacco_420_lightLine_100_gram",
          title: "Тютюн 420(Чотири Двадцять) Light Line 100 гр",
          products: [...lightLine100grProducts],
          imgUrl: logo_420,
        },
      ],
    },
    {
      slug: "tabacco_420_250_gram",
      title: "Тютюн 420(Чотири Двадцять) 250 грам",
      products: [...darkLine250grProducts, ...lightLine250grProducts],
      imgUrl: logo_420,
      description: tabacco420Description250gr,
      subcategories: [
        {
          slug: "tabacco_420_darkLine_250_gram",
          title: "Тютюн 420(Чотири Двадцять) Dark Line 250 гр",
          products: [...darkLine250grProducts],
          imgUrl: logo_420,
        },
        {
          slug: "tabacco_420_lightLine_250_gram",
          title: "Тютюн 420(Чотири Двадцять) Light Line 250 гр",
          products: [...lightLine250grProducts],
          imgUrl: logo_420,
        },
      ],
    },
  ],
};
