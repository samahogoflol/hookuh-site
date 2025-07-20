import delivery from "../../utils/imgs/delivery/delivery.png";
import garanty from "../../utils/imgs/delivery/garanty.png";
import pay from "../../utils/imgs/delivery/pay.png";
import returnGood from "../../utils/imgs/delivery/return.png";

const Delivery = () => {
  return (
    <div className="grid grid-cols-4 gap-20 bg-gray-100 rounded-2xl h-30 mt-15 p-5">
      <div className="flex items-center ">
        <img src={delivery} alt="" width={60} />
        <span className="ml-3 font-medium text-[1.1rem]">Доставка товара по Украине</span>
      </div>
      <div className="flex items-center ">
        <img src={garanty} alt="" width={60} />
        <span className="ml-3 font-medium text-[1.1rem]">Официальная гарантия от производителя</span>
      </div>
      <div className="flex items-center ">
        <img src={pay} alt="" width={60} />
        <span className="ml-3 font-medium text-[1.1rem]">Оплата наличными или картой</span>
      </div>
      <div className="flex items-center ">
        <img src={returnGood} alt="" width={60} />
        <span className="ml-3 font-medium text-[1.1rem]">Возврат без вопросов</span>
      </div>
    </div>
  );
};

export default Delivery;
