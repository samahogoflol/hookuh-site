import trashIcon from "../../../imgs/icons/trash-basket-icon.avif";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../modules/cart/cartSlice";

interface RemoveItemButtonProps {
  id: string;
}

const BtnRemoveItem: React.FC<RemoveItemButtonProps> = ({ id }) => {
  const dispatch = useDispatch();

  const onRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <button onClick={onRemove} className="cursor-pointer">
      <img src={trashIcon} alt="Видалити товар з корзини" width={35} />
    </button>
  );
};

export default BtnRemoveItem;
