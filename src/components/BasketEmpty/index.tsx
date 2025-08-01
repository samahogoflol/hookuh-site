import BtnShowMoreProducts from "../Buttons/BtnShowMoreProducts";
import { addItem } from "../../modules/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@reduxjs/toolkit/query";

const BasketEmpty = () => {
  return (
    <>
      <div className="w-200 min-h-35 border border-gray-200">
        <div className="bg-gray-100 w-full h-10 flex items-center justify-between">
          <span className="ml-8">У кошику товара</span>
          <div className="h-10 w-20 text-[1.3rem] text-center font-medium hover:bg-white">
            <button>x</button>
          </div>
        </div>
        <div className="px-5">
          <p className="text-center mt-2 mb-2">У кошику порожньо</p>
          <div>
            <BtnShowMoreProducts />
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketEmpty;
