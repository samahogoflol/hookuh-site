import { allCategoriesData } from "../data/allCategoriesData";

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
  description1: string;
  description2?: string;
  listItems?: ListItems;
  conclusion1?: string;
  conclusion2?: string;
  imgUrl?: string;
}

export type CategoryDescription = ContentBlock[];

export interface CategoryData {
  title: string;
  typeOfProducts: any;
  productContent: any;
  description: CategoryDescription;
}

export type CategoryName = keyof typeof allCategoriesData;
