import ButtonBuy from "../Buttons/BtnBuy";
import ButtonHeart from "../Buttons/BtnHeart";
import { staticProducts } from "../../data/products";

const GoodsList = () => {
  return (
    <>
      {staticProducts.map((item) => {
        return (
          <div className="">
            <div className="w-70 min-h-110 max-h-120 font-bold text-center flex flex-col items-center p-2 border border-gray-100 border-t-white">
              <img className="" src={item.imgURL} width={220} alt="" />
              <h2 className="h-25">
                {item.brand}
                {item.name}
              </h2>
              <span className="text-[1.1rem]">{item.price}₴</span>
              <div className="flex justify-center items-center ml-5">
                <ButtonBuy />
                <ButtonHeart />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GoodsList;
