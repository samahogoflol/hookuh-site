import RoundedButton from "../../components/Buttons/BtnRounded";
import ButtonHeart from "../../components/Buttons/BtnHeart";
import BtnAddItemToCart from "../../components/Buttons/BtnAddItemToCart";
import DescriptionTable from "../../components/DescriptionTable";

import tovar from "../../imgs/vapeGoodsList/isparitel_lost_vape_ub_mini_1.0_om.webp";
import guaranteeOfQuality from "../../imgs/icons/quality_guarantee.png";
import discont from "../../imgs/icons/discont.jpg";
import payment from "../../imgs/icons/payment.jpg";
import delivery from "../../imgs/icons/delivery.png";
import NewGoodsSlider from "../MainPage/NewGoodsSlider";

const productSinglePage = () => {
  return (
    <>
      <div className="mt-10 grid grid-cols-[1.5fr_1.9fr_1.2fr] gap-5  ">
        <div className="flex flex-col text-center items-center">
          <img className="mb-5" src={tovar} alt="" />
          <section>
            <h2 className="font-bold text-[1.1rem]">Потрібна допомога з вибором?</h2>
            <p className="mb-3">Залишіть свій номер і фахівець вам передзвонить.</p>
            <RoundedButton children="Замовити дзвінок" />
          </section>
        </div>
        <div>
          <h2 className="font-medium text-2xl">Змінний Випарювач VooPoo PnP-TM2 Mesh Coil 0.8 OM</h2>
          <div className="flex mt-5 ">
            <div className="text-3xl">*****</div>
            <div className="mt-0.5 ml-2">0 відгуків</div>
          </div>
          <div className=" flex flex-col items-center">
            <h2>105₴</h2>
            <div className="w-40 h-8 bg-gray-300"></div>
            <div className="flex"></div>
          </div>
          <div className="flex mt-2 items-center">
            <p className="text-green-500 font-medium mr-40">На складі</p>
            <ButtonHeart />
          </div>
          <div>
            <DescriptionTable title="Виробник" description="VooPoo" />
            <DescriptionTable title="Країна Виробник" description="Китай" />
            <DescriptionTable title="Опір" description="0.8 Om" />
            <DescriptionTable title="Тип Спіралі" description="Спіраль" />
          </div>
          <p className="mt-10 mb-5">
            Змінний Випарник VooPoo PnP-TM2 Mesh Coil 0.8 OM - це високоякісний випаровувач, спеціально розроблений для використання з
            різними вейп-пристроями популярного бренду. POD-випарник створений із застосуванням передових технологій для забезпечення
            максимальної продуктивності. Наша унікальна конструкція гарантує надійність і довговічність, а спеціально розроблена
            формула матеріалів забезпечує чистий та інтенсивний смак під час кожного затягування. Він забезпечує гідну
            паропродуктивність, що дає змогу насолоджуватися приємним парінням та насиченим смаком вашої улюбленої рідини. Якісні
            комплектуючі упаковуються в герметичний пакет, щоб уникнути потрапляння пилу і сторонніх запахів. Змінний випаровувач
            VooPoo PnP-TM2 Mesh Coil 0.8 OM - ідеальне рішення для вейперів, які прагнуть найкращого смаку і щільних хмар пари.
          </p>

          <p className="font-bold">
            Якщо у вас залишилися питання, ви завжди можете їх задати нам за номером телефону +38(093)561-21-97
          </p>
        </div>

        <div>
          <div className="flex">
            <div>
              <img src={guaranteeOfQuality} alt="Гарантія якості" width={60} />
            </div>
            <section>
              <h2 className="font-medium ">100% ГАРАНТІЯ ЯКОСТІ</h2>
              <p className="text-[0.8rem]">весь товар тільки перевірених виробників і брендів</p>
            </section>
          </div>
          <div className="flex mt-5 mb-5">
            <div>
              <img src={discont} alt="Система знижок" width={60} />
            </div>
            <section>
              <h2 className="font-medium mt-4">СИСТЕМА ЗНИЖОК</h2>
              <ul className="list-disc mt-5">
                <li>від 1000 до 2500 грн (2%)</li>
                <li>від 2500 до 5000 грн (4%)</li>
                <li>від 5000 до 10 000 грн (7%)</li>
                <li>від 10 000 грн (10%)</li>
              </ul>
            </section>
          </div>
          <div className="flex">
            <div>
              <img src={payment} alt="Гарантія якості" width={130} />
            </div>
            <section>
              <h2 className="font-medium ">ОПЛАТА</h2>
              <p className="text-[0.8rem]">
                Оплачувати товар в магазині ви можете: Готівкою, Visa / MasterCard, Безготівковий розрахунок
              </p>
            </section>
          </div>
          <div className="flex mt-5 mb-5">
            <div>
              <img src={delivery} alt="Гарантія якості" width={120} />
            </div>
            <section className="ml-2">
              <h2 className="font-medium  ">ДОСТАВКА</h2>
              <p className="text-[0.8rem]">Доставка по Україні здійснюється транспортними компаніями: Нова Пошта, Інтайм, Делівері.</p>
            </section>
          </div>
        </div>
      </div>
      <NewGoodsSlider />
    </>
  );
};

export default productSinglePage;
