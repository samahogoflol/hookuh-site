import odnorazki from "../../utils/imgs/veipImg/odnorazki.webp";
import podSystem from "../../utils/imgs/veipImg/pod-system.webp";
import kartridze from "../../utils/imgs/veipImg/kartridze.webp";
import boxMod from "../../utils/imgs/veipImg/box-mod.webp"; 

const GoodsCategories = () => {
  return (
    <div className=" pl-12 flex w-12/12 h-20 border-2 border-gray-100 gap-10 items-center">
      <div className="flex items-center h-15 w-55 cursor-pointer hover:bg-gray-100">
        <img className="w-12 h-12" src={odnorazki} alt="" />
        <span>Одноразові електронні сигарети</span>
      </div>
      <div className="flex items-center w-55 cursor-pointer hover:bg-gray-100">
        <img className="w-12 h-12" src={podSystem} alt="" />
        <span>Багаторазові POD системи</span>
      </div>
      <div className="flex items-center w-55 cursor-pointer hover:bg-gray-100">
        <img className="w-12 h-12" src={kartridze} alt="" />
        <span>Комплектуючі</span>
      </div>
      <div className="flex items-center w-55 cursor-pointer hover:bg-gray-100">
        <img className="w-12 h-12" src={boxMod} alt="" />
        <span>Бокс моди</span>
      </div>
    </div>
  );
};

export default GoodsCategories;
