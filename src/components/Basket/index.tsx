import type React from "react";
import type { RootState } from "../../store";
import type { Product } from "../../types/product";
import { useSelector } from "react-redux";
import BtnShowMoreProducts from "../Buttons/BtnShowMoreProducts";
import BtnClose from "../Buttons/BtnClose";
import BtnAddItemToCart from "../Buttons/BtnAddItemToCart";
import Counter from "../Counter";
import BtnRemoveItem from "../Buttons/BtnRemoveItem";

const Basket: React.FC<Product> = () => {
  const { items, totalQuantity, totalPrice, totalDiscount } = useSelector((state: RootState) => state.cart);

  const getQuantityText = (quantity: number): string => {
    const lastTwoDigits = quantity % 100;
    const lastDigit = quantity % 10;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return "товарів";
    }
    if (lastDigit === 1) {
      return "товар";
    }
    if (lastDigit >= 2 && lastDigit <= 4) {
      return "товарa";
    }
    return "товарів";
  };

  const quantityText = getQuantityText(totalQuantity);

  return (
    <>
      {items.length === 0 ? (
        <div className="min-h-40 max-h-130 w-200 border border-gray-200 text-center">
          <div className="bg-gray-100 w-full h-10 flex items-center justify-between mb-5 ">
            <p className="p-5">Корзина покупок</p>
            <BtnClose />
          </div>

          <p>Кошик порожній</p>
          <div className="flex justify-start p-5">
            <BtnShowMoreProducts />
          </div>
        </div>
      ) : (
        <div className="min-h-35 max-h-130 w-200 border border-gray-200">
          <div className="bg-gray-100 w-full h-10 flex items-center justify-between mb-5">
            <span className="ml-8">
              У кошику {totalQuantity} {quantityText}
            </span>
            <BtnClose />
          </div>
          <div className="w-200 max-h-80 overflow-y-auto">
            {items.map((item) => (
              <>
                <div className="flex items-center gap-10 px-5">
                  <img src={item.imgURL} alt={item.name} width={60} />
                  <h3 className="w-70">{item.name}</h3>
                  <Counter itemId={item.id} children={item.quantity} />
                  <h3>Ціна : {item.price * item.quantity}</h3>
                  <BtnRemoveItem />
                </div>
                <div className="px-5">
                  <hr className="border-t border-gray-100 mt-3 mb-3" />
                </div>
              </>
            ))}
          </div>
          <div className="text-right mt-5 font-medium p-5">
            <div className="flex ">
              <p className="w-16/3 text-right">Сума :</p>
              <p className="w-1/2">{totalPrice}₴</p>
            </div>
            {totalPrice >= 1000 ? (
              <div className="flex ">
                <p className="w-16/3 text-right">Знижка :</p>
                <p className="w-1/2">{totalDiscount}</p>
              </div>
            ) : null}

            <div className="flex ">
              <p className="w-16/3 text-right">Всього :</p>
              <p className="w-1/2">{totalPrice - totalDiscount}₴</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between mt-5 mb-5 px-5">{/* <BtnAddItemToCart product={} /> */}</div>
    </>
  );
};

export default Basket;
