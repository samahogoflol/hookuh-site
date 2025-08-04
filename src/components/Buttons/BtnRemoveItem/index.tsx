import trashIcon from "../../../imgs/icons/trash-basket-icon.avif";
const BtnRemoveItem = () => {
  return (
    <button className="cursor-pointer">
      <img src={trashIcon} alt="Видалити товар з корзини" width={35} />
    </button>
  );
};

export default BtnRemoveItem;
