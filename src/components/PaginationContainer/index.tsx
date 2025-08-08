import BtnPagePannel from "../Buttons/BtnPagePannel";
import type { Product } from "../../types/product";
import { tabakStaticContent } from "../../data/tabakContent";

interface PaginationContainerProps {
  hasMore: boolean;
  onLoadMore: () => void;
  visibleItems: Product[];
}

const PaginationContainer: React.FC<PaginationContainerProps> = ({ hasMore, onLoadMore, visibleItems }) => {
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

      <div className="text-center mt-5">
        <BtnPagePannel children="1" />
        <BtnPagePannel children="2" />
        <BtnPagePannel children="3" />
        <BtnPagePannel children="4" />
        <BtnPagePannel children="..." />
        <BtnPagePannel children="109" />
        <BtnPagePannel children=">" />
      </div>
    </>
  );
};

export default PaginationContainer;
