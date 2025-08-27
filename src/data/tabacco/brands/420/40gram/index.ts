import { darkLine40grProducts } from "./darkLine";
import { tabacco420Description40gr } from "./description40gr";

import type { Category } from "../../../../../types/data";

import logo_420 from "../../../../../imgs/logotypes/4_20_logo.webp";

export const category420_40g: Category = {
  slug: "tabacco_420_40_gram",
  title: "Тютюн 420 Dark Line 40 грам",
  products: [...darkLine40grProducts],
  description: tabacco420Description40gr,
  imgUrl: logo_420,
};
