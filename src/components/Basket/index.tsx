import lirra_50_gr_usa_potekshy from "../../imgs/tabaks/lirra/lirra_50_gr_usa_potekshy-.webp";
import { ButtonBuy, ShowMoreGoods } from "../Buttons/Buttons";

const Basket = () => {
  return (
    <>
      <div className="min-h-35 max-h-130 w-200 border border-gray-200">
        <div className="bg-gray-100 w-full h-10 flex items-center justify-between mb-5">
          <span className="ml-8">У кошику "" товара</span>
          <div className="h-10 w-20 text-[1.3rem] text-center font-medium hover:bg-white">
            <button>x</button>
          </div>
        </div>

        <div className="flex items-center gap-10 px-5">
          <img src={lirra_50_gr_usa_potekshy} alt="" width={50} />
          <h3>Тютюн Daim Lemonade (Лимонад) 50гр</h3>
          <div>counter</div>
          <h3>price</h3>
          <button>delete</button>
        </div>
        <div className="px-5">
          <hr className="border-t border-gray-100 mt-3 mb-3" />
        </div>

        <div className="flex items-center gap-10 px-5">
          <img src={lirra_50_gr_usa_potekshy} alt="" width={50} />
          <h3>Тютюн Daim Lemonade (Лимонад) 50гр</h3>
          <div>counter</div>
          <h3>price</h3>
          <button>delete</button>
        </div>

        <div className="px-5">
          <hr className="border-t border-gray-100 mt-3 mb-3" />
        </div>

        <div className="flex items-center gap-10 px-5">
          <img src={lirra_50_gr_usa_potekshy} alt="" width={50} />
          <h3>Тютюн Daim Lemonade (Лимонад) 50гр</h3>
          <div>counter</div>
          <h3>price</h3>
          <button>delete</button>
        </div>
        <div className="px-5">
          <hr className="border-t border-gray-100 mt-3 mb-3" />
        </div>

        <div className="flex items-center gap-10 px-5">
          <img src={lirra_50_gr_usa_potekshy} alt="" width={50} />
          <h3>Тютюн Daim Lemonade (Лимонад) 50гр</h3>
          <div>counter</div>
          <h3>price</h3>
          <button>delete</button>
        </div>
        <div className="px-5">
          <hr className="border-t border-gray-100 mt-3 mb-3" />
        </div>

        <div className="text-right mt-5 font-medium px-5">
          <p className="mr-3.5">
            Сума : <span className="ml-10 "> сума""</span>
          </p>
          <p className="mr-3.5">
            Знижка : <span className="ml-10 "> сума""</span>
          </p>
          <p>
            Всього : <span className="ml-10 "> всього""</span>
          </p>
        </div>

        <div className="flex justify-between mt-5 mb-5 px-5">
          <ShowMoreGoods children="Назад до покупок" />
          <ButtonBuy children="Перейти до кошику" />
        </div>
      </div>
    </>
  );
};

export default Basket;
