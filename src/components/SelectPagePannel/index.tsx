import BtnPagePannel from "../Buttons/BtnPagePannel";

import { tabakStaticContent } from "../../data/tabakContent";
import usePagination from "../../customHooks/usePagination";

const SelectPagePannel = () => {
  const { onLoadMore } = usePagination(tabakStaticContent, 20);

  return (
    <>
      <div className="text-center mt-5">
        <BtnPagePannel onLoad={onLoadMore} children="1" />
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

export default SelectPagePannel;
