import { useDispatch } from "react-redux";
import { addItem } from "../../../modules/cart/cartSlice";
import type { Product } from "../../../types/product";

interface AddtoCartButtonProps {
  product: Product;
}

const BtnAddItemToCart: React.FC<AddtoCartButtonProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <>
      <button onClick={handleAddToCart} className="max-w-55 min-w-40 h-10  bg-black text-white font-medium rounded cursor-pointer ">
        Купити
      </button>
    </>
  );
};

export default BtnAddItemToCart;
