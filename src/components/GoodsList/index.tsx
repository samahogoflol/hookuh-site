import BtnAddItemToCart from "../Buttons/BtnAddItemToCart";
import ButtonHeart from "../Buttons/BtnHeart";
import type { Product } from "../../types/product";

interface GoodsListProps {
  visibleItems: Product[];
}

const GoodsList = ({ visibleItems }: GoodsListProps) => {
  return (
    <>
      {visibleItems.map((item) => {
        return (
          <div
            key={item.id}
            className="w-68.5 min-h-110 max-h-120 font-bold text-center flex flex-col items-center p-2 border border-gray-100 border-t-white"
          >
            <img className="" src={item.imgUrl} width={220} alt="" />
            <h2 className="h-25">
              {item.brand}
              {item.name}
            </h2>
            <span className="text-[1.1rem]">{item.price}₴</span>
            <div className="flex justify-center items-center ml-5">
              <BtnAddItemToCart product={item} />
              <ButtonHeart />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GoodsList;
