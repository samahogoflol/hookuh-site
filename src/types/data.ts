import { allCategoriesData } from "../data/allCategoriesData";
import type { Product } from "./product";

export interface ListItems {
  liItem1?: string;
  liItem2?: string;
  liItem3?: string;
  liItem4?: string;
  liItem5?: string;
  liItem6?: string;
  liItem7?: string;
}

export interface ContentBlock {
  header: string;
  description1?: string;
  description2?: string;
  description3?: string;
  listItems?: ListItems;
  conclusion1?: string;
  conclusion2?: string;
  imgUrl?: string;
}

export interface Category {
  slug?: string;
  title?: string;
  products: Product[];
  subcategories?: Category[];
  imgUrl?: string;
  categoryName?: string;
  description?: ContentBlock[];
}

export type CategoryName = keyof typeof allCategoriesData;
