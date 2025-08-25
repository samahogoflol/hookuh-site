import type { Product } from "../../types/product";
import BtnAddItemToCart from "../../components/Buttons/BtnAddItemToCart";
import ButtonHeart from "../../components/Buttons/BtnHeart";

interface ProductListProps {
  visibleItems: Product[];
}

const ProductsList: React.FC<ProductListProps> = ({ visibleItems }) => {
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

export default ProductsList;
