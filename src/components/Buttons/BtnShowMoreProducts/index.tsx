import usePagination from "../../../customHooks/usePagination";
import { tabakStaticContent } from "../../../data/tabakContent";

const BtnShowMoreProducts = () => {
  const { onLoadMore, hasMore, visibleItems } = usePagination(tabakStaticContent, 20);

  return (
    <>
      {hasMore && tabakStaticContent.length >= visibleItems.length ? (
        <button
          onClick={onLoadMore}
          className="w-50 h-8 text-[0.9rem] text-black rounded cursor-pointer border border-gray-300 hover:border-none hover:bg-gray-200 "
        >
          Показати ще 20 товарів
        </button>
      ) : null}
    </>
  );
};

export default BtnShowMoreProducts;
