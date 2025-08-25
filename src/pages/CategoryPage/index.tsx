import { allCategoriesData } from "../../data/allCategoriesData";
import { useParams } from "react-router-dom";
import usePagination from "../../customHooks/usePaginaton";

import ProductsList from "./ProductList";
import ProductsDescription from "./ProductsDescription";
import Categories from "./ProductCategories";
import Page404 from "../404";
import Filters from "../../components/Filters";
import PaginationContainer from "../../components/PaginationContainer";
import type { Product } from "../../types/product";

const CategoryPage = () => {
  const { slugs } = useParams();
  const findRightCategory = allCategoriesData.find((item) => item.slug === slugs);
  const { visibleItems, totalPages, currentPage, goToPage, onLoadMore, hasMoreOnCurrentPage, isLastPage } = usePagination<Product>(
    findRightCategory?.products || [],
    20
  );

  return (
    <>
      {findRightCategory ? (
        <>
          <h2 className="text-center mt-10 mb-5 text-3xl font-medium">{findRightCategory?.title}</h2>
          <div className="grid grid-cols-[280px_1fr]">
            <div>
              <Filters />
            </div>
            <div>
              <div className="grid grid-cols-4">
                <Categories />
              </div>
              <div className="grid grid-cols-4">{visibleItems && <ProductsList visibleItems={visibleItems} />}</div>
              <div className="flex flex-col items-center mt-5">
                <PaginationContainer onLoadMore={onLoadMore} hasMoreOnCurrentPage={hasMoreOnCurrentPage} />
              </div>
            </div>
          </div>
          <div>{findRightCategory && <ProductsDescription findRightCategory={findRightCategory} />}</div>
        </>
      ) : (
        <Page404 />
      )}
    </>
  );
};

export default CategoryPage;
