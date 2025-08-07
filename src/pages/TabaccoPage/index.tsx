import BtnShowMoreProducts from "../../components/Buttons/BtnShowMoreProducts";
import Filters from "../../components/Filters";
import GoodsCategories from "../../components/GoodsCategories";
import GoodsList from "../../components/GoodsList";
import SelectPagePannel from "../../components/SelectPagePannel";
import { useState } from "react";
import { tabakStaticContent } from "../../data/tabakContent";

const TabaccoPage = () => {
  const itemsPerPage = 20;
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage);
  const visibleProducts = tabakStaticContent.slice(0, itemsToShow);

  const onLoad = () => {
    setItemsToShow(itemsToShow + itemsPerPage);
  };

  return (
    <>
      <h2 className="text-center mt-10 mb-5 text-3xl font-medium">Тютюн</h2>
      <div className="grid grid-cols-[280px_1fr]">
        <div>
          <Filters />
        </div>
        <div>
          <GoodsCategories />
          <div className="grid grid-cols-4 mt-3">
            <GoodsList products={visibleProducts} />
          </div>
          <div>
            <div className="flex justify-center text-center mt-5">
              {tabakStaticContent.length <= visibleProducts.length ? null : <BtnShowMoreProducts onLoad={onLoad} />}
            </div>
            <div>
              <SelectPagePannel onLoad={onLoad} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabaccoPage;
