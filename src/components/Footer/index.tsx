import "./index.css";

import whiteLogo from "./../../utils/imgs/logotypes/kalyan_for_everyone_wite.png";

const Footer = () => {
  return (
    <>
      <footer className=" flex items-center  mt-20 h-110 chessboard-black-grey-bg">
        <img className="ml-80 mb-55" src={whiteLogo} alt="" width={350} />
        <div className="grid grid-cols-3 gap-30 mb-30 ">
          <section className="text-gray-400">
            <h3 className="font-bold text-[1.2rem] mb-2">Контакти</h3>
            <p>Україна</p>
            <p>+38(093)561-21-97</p>
            <p>denis.shmatkov95@gmail.com</p>
            <p>Telegram</p>
            <p>Пн-Сб з 10:00 до 21:00</p>
          </section>

          <section className="text-gray-400">
            <h3 className="font-bold text-[1.2rem] mb-2">Асортимент</h3>
            <p>Електронні сигарети</p>
            <p>Рідини</p>
            <p>Кальянний тютюн</p>
            <p>Вугілля</p>
            <p>Кальяни</p>
            <p>Аксесуари для кальяну</p>
          </section>

          <section className="text-gray-400">
            <h3 className="font-bold text-[1.2rem] mb-2">Інформація</h3>
            <p>Оплата і доставка</p>
            <p>Співпраця</p>
            <p>Оптовим покупцям</p>
            <p>Відгуки</p>
            <p>Блог</p>
          </section>
        </div>
      </footer>
      <p className="text-gray-400 mt-[-9rem] text-center text-[0.85rem] w-[70rem] ml-100">
        Онлайн-магазин кальянів VipKalyan - це ваша можливість придбати якісний продукт для особистого використання або в якості
        подарунка знайомому цінителеві таких виробів. Наш магазин кальянів в Харкові відібрав для вас величезний асортимент обладнання
        від перевірених і добре зарекомендували себе виробників.
      </p>
      <p className="text-gray-400 text-center mt-13 text-[0.8rem]">© KALYAN FOR EVERYONE 2010 - 2025. Всі права захищені.</p>
    </>
  );
};

export default Footer;
