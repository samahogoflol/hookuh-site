import usePagination from "../../customHooks/usePaginaton";
import type { Category } from "../../types/data";
import type { Product } from "../../types/product";
import BtnAddItemToCart from "../Buttons/BtnAddItemToCart";
import ButtonHeart from "../Buttons/BtnHeart";

interface GoodsListProps {
  findRightCategory: Category;
}

const GoodsList: React.FC<GoodsListProps> = ({ findRightCategory }) => {
  const test = findRightCategory ? findRightCategory.products : [];
  const { visibleItems } = usePagination<Product>(test, 20);

  return (
    <>
      {visibleItems.map((item) => (
        <div
          key={item.id}
          className="w-68.5 h-115 font-bold text-center flex flex-col justify-between items-center p-2 border border-gray-100 border-t-white"
        >
          <img src={item.imgUrl} width={240} alt={item.name} />
          <h2 className="mt-5 mb-2">{item.name}</h2>
          <span className="text-[1.1rem] mt-auto">{item.price}₴</span>
          <div className="flex justify-center items-center ml-5">
            <BtnAddItemToCart product={item} />
            <ButtonHeart />
          </div>
        </div>
      ))}
    </>
  );
};

export default GoodsList;
