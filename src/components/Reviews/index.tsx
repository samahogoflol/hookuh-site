import lirra_crazy_lemon_50gr_potekshy from "../../imgs/tabaks/lirra/lirra_50_gr_usa_potekshy-.webp";
import ButtonBuy from "../Buttons/BtnBuy";

const Reviews = () => {
  return (
    <>
      <h2 className=" mt-10 font-medium text-2xl text-center">Відгуки</h2>
      <div className="grid grid-cols-2 grid-rows-2 max-w-300 h-180 gap-15 ml-20 mt-10 ">
        <div className="grid grid-cols-2 shadow-2xl rounded-b-md p-10">
          <img src={lirra_crazy_lemon_50gr_potekshy} alt="" />
          <div>
            <h2 className="cursor-pointer font-medium">Вугілля Горіхове Mind Air Gap (72 Кубика) 1 кг</h2>
            <div className="flex justify-between mt-2 mb-2">
              <div>******</div>
              <div>Дмитрий</div>
            </div>
            <span>
              Брал 1 раз серию Mind, приятно удивила Эта серия просто ужас! Тухнут при покуре, пепла в разы больше чем в серии Mind. И
              ноу хау в центре кубика в виде сквозного отверстия это нечто.
            </span>
          </div>
          <ButtonBuy />
        </div>

        <div className="grid grid-cols-2 shadow-2xl rounded-b-md p-10">
          <img src={lirra_crazy_lemon_50gr_potekshy} alt="" />
          <div>
            <h2 className="cursor-pointer font-medium">Вугілля Горіхове Mind Air Gap (72 Кубика) 1 кг</h2>
            <div className="flex justify-between mt-2 mb-2">
              <div>******</div>
              <div>Наталия </div>
            </div>
            <span>Дякую за швидку доставку! Табак дуже класний!</span>
          </div>
          <ButtonBuy />
        </div>
        <div className="grid grid-cols-2 shadow-2xl rounded-b-md p-10">
          <img src={lirra_crazy_lemon_50gr_potekshy} alt="" />
          <div>
            <h2 className="cursor-pointer font-medium">Вугілля Горіхове Mind Air Gap (72 Кубика) 1 кг</h2>
            <div className="flex justify-between  mt-2 mb-2">
              <div>******</div>
              <div>Анна </div>
            </div>
            <span>Зламався через півроку,картридж міняла. Розчарована ...</span>
          </div>
          <ButtonBuy />
        </div>
        <div className="grid grid-cols-2 shadow-2xl rounded-b-md p-10">
          <img src={lirra_crazy_lemon_50gr_potekshy} alt="" />
          <div>
            <h2 className="cursor-pointer font-medium">Вугілля Горіхове Mind Air Gap (72 Кубика) 1 кг</h2>
            <div className="flex justify-between mt-2">
              <div>******</div>
              <div>Богдан</div>
            </div>
            <span>Приятный ягодный вкус, без ментола. Отлично</span>
          </div>
          <ButtonBuy />
        </div>
      </div>

      <div className="flex justify-center gap-50 mt-10">
        <button className="bg-indigo-200 w-100 h-16 rounded-2xl font-medium text-2xl cursor-pointer hover:opacity-70 ">
          Переглянути всі відгуки
        </button>
      </div>
    </>
  );
};

export default Reviews;
