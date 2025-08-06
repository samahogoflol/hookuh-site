import { useDispatch } from "react-redux";
import { addItem } from "../../../modules/cart/cartSlice";
import type { Product } from "../../../types/product";
import { useState } from "react";
import ModalWindow from "../../ModalWindow";

interface AddtoCartButtonProps {
  product: Product;
  onProductAdd: (product: Product) => void;
}

const BtnAddItemToCart: React.FC<AddtoCartButtonProps> = ({ product }) => {
  const [activeModal, setActiveModal] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
    setActiveModal(true);
  };

  return (
    <>
      <button onClick={handleAddToCart} className="max-w-55 min-w-40 h-10  bg-black text-white font-medium rounded cursor-pointer ">
        Купити
      </button>
      <ModalWindow active={activeModal} setActive={setActiveModal} />
    </>
  );
};

export default BtnAddItemToCart;
