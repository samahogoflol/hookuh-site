import type { Product } from "../../types/product";
import type { Category, ContentBlock } from "../../types/data";

import Filters from "../../components/Filters";
import PaginationContainer from "../../components/PaginationContainer";
import Categories from "./ProductCategories";
import ProductsList from "./ProductList";
import ProductsDescription from "./ProductsDescription";

interface CategoryLayoutProps {
  categories?: Category[];
  visibleItems?: Product[];
  description?: ContentBlock[];
  title?: string;
  onLoadMore: () => void;
  hasMoreItemsToShow: boolean;
}

const CategoryLayout: React.FC<CategoryLayoutProps> = ({
  categories,
  visibleItems,
  description,
  title,
  onLoadMore,
  hasMoreItemsToShow,
}) => {
  return (
    <div>
      <div className="text-center mt-10 mb-5 text-3xl font-medium">{title}</div>
      <div className="grid grid-cols-[280px_1fr]">
        <div>
          <Filters />
        </div>
        <div>
          <div className="grid grid-cols-4">{categories && <Categories categories={categories} />}</div>
          <div className="grid grid-cols-4">{visibleItems && <ProductsList visibleItems={visibleItems} />}</div>
          <div className="flex flex-col items-center mt-5">
            <PaginationContainer onLoadMore={onLoadMore} hasMoreItemsToShow={hasMoreItemsToShow} />
          </div>
        </div>
      </div>
      {description && <ProductsDescription description={description} />}
    </div>
  );
};

export default CategoryLayout;
