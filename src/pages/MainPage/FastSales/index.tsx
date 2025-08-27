import accessories from "../../../imgs/icons/accessories.png";
import actions from "../../../imgs/icons/actions.png";
import gidkost from "../../../imgs/icons/gidkost.png";
import kalian from "../../../imgs/icons/kalian.png";
import odnorazki from "../../../imgs/icons/odnorazki.png";
import tabak from "../../../imgs/icons/tabak.png";
import ugol from "../../../imgs/icons/ugol.png";
import enterArrowSmall from "../../../imgs/icons/enter-arrow-small.png";

const FastSales = () => {
  return (
    <>
      <div className="flex gap-5 mt-15 ">
        <div className=" w-45 h-60 bg-gray-100 p-4 text-[1.1rem] font-medium leading-4 cursor-pointer">
          <span className="">Електронні сигарети</span>
          <img src={odnorazki} alt="" />
          <button className="mt-[-0.4rem]">
            <img src={enterArrowSmall} alt="" width={30} />
          </button>
        </div>

        <div className="w-45 h-60 bg-gray-100 p-4 text-[1.1rem] font-medium cursor-pointer">
          <span className="">Тютюн</span>
          <img src={tabak} alt="" />
          <button className="">
            <img src={enterArrowSmall} alt="" width={30} />
          </button>
        </div>

        <div className="w-45 h-60 bg-gray-100 p-4 text-[1.1rem] font-medium  cursor-pointer">
          <span>Рідини</span>
          <img src={gidkost} alt="" />
          <button className="">
            <img src={enterArrowSmall} alt="" width={30} />
          </button>
        </div>

        <div className="w-45 h-60 bg-gray-100 p-4 text-[1.1rem] font-medium  cursor-pointer">
          <span>Кальяни</span>
          <img src={kalian} alt="" />
          <button className="">
            <img src={enterArrowSmall} alt="" width={30} />
          </button>
        </div>

        <div className="w-45 h-60 bg-gray-100 p-4 text-[1.1rem] font-medium cursor-pointer">
          <span>Вуголь</span>
          <img src={ugol} alt="" />
          <button className="">
            <img src={enterArrowSmall} alt="" width={30} />
          </button>
        </div>

        <div className="w-45 h-60 bg-gray-100 p-4 text-[1.1rem] font-medium cursor-pointer">
          <span>Всі аксесуари</span>
          <img src={accessories} alt="" />
          <button className="">
            <img src={enterArrowSmall} alt="" width={30} />
          </button>
        </div>

        <div className="w-45 h-60 bg-gray-100 p-4 text-[1.1rem] font-medium cursor-pointer">
          <span>Акції</span>
          <img src={actions} alt="" />
          <button className="">
            <img src={enterArrowSmall} alt="" width={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default FastSales;
