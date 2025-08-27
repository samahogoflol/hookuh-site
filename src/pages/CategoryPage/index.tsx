import { allCategoriesData } from "../../data/allCategoriesData";
import { useParams } from "react-router-dom";
import Page404 from "../404";
import CategoryLayout from "./CategoryLayout";

import { usePagination } from "../../customHooks/usePaginaton";
import type { Product } from "../../types/product";

const CategoryPage = () => {
  const { slugs, brand, weight, line } = useParams();
  const findRightCategory = allCategoriesData.find((item) => item.slug === slugs);
  const findRightBrand = findRightCategory?.subcategories?.find((item) => item.slug === brand);
  const findRightWeight = findRightBrand?.subcategories?.find((item) => item.slug === weight);
  const findRightLine = findRightWeight?.subcategories?.find((item) => item.slug === line);

  let currentCategory;

  if (findRightLine) {
    currentCategory = findRightLine;
  } else if (findRightWeight) {
    currentCategory = findRightWeight;
  } else if (findRightBrand) {
    currentCategory = findRightBrand;
  } else if (findRightCategory) {
    currentCategory = findRightCategory;
  }

  const { visibleItems, hasMoreItemsToShow, onLoadMore } = usePagination<Product>(currentCategory?.products || [], 20);

  if (findRightLine) {
    return (
      <>
        <CategoryLayout
          categories={findRightLine.subcategories}
          visibleItems={visibleItems}
          description={findRightLine.description}
          title={findRightLine.title}
          onLoadMore={onLoadMore}
          hasMoreItemsToShow={hasMoreItemsToShow}
        />
      </>
    );
  } else if (findRightWeight) {
    return (
      <>
        <CategoryLayout
          categories={findRightWeight.subcategories}
          visibleItems={visibleItems}
          description={findRightWeight.description}
          title={findRightWeight.title}
          onLoadMore={onLoadMore}
          hasMoreItemsToShow={hasMoreItemsToShow}
        />
      </>
    );
  } else if (findRightBrand) {
    return (
      <>
        <CategoryLayout
          categories={findRightBrand.subcategories}
          visibleItems={visibleItems}
          description={findRightBrand.description}
          title={findRightBrand.title}
          onLoadMore={onLoadMore}
          hasMoreItemsToShow={hasMoreItemsToShow}
        />
      </>
    );
  } else if (findRightCategory) {
    return (
      <>
        <CategoryLayout
          categories={findRightCategory.subcategories}
          visibleItems={visibleItems}
          description={findRightCategory.description}
          title={findRightCategory.title}
          onLoadMore={onLoadMore}
          hasMoreItemsToShow={hasMoreItemsToShow}
        />
      </>
    );
  } else {
    return <Page404 />;
  }
};

export default CategoryPage;
