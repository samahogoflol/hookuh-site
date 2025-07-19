import NavItem from "../NavItem";

import phoneIcon from "./../../utils/imgs/icons/phone_icon.jpg";
import heartIcon from "./../../utils/imgs/icons/heart_icon.png";
import basketIcon from "./../../utils/imgs/icons/basket_icon.jpg";
import personLogOutIcon from "./../../utils/imgs/icons/person_icon_log_out.png";
import blackLogo from "./../../utils/imgs/logotypes/kalyan_for_everyone.png";
const Header = () => {
  return (
    <>
      <header className="flex justify-center items-center p-3">
        <nav className="flex">
          <img className="opacity-100" src={blackLogo} alt="" width={100} />
          <ul className="flex gap-5 items-center font-medium">
            <div className="ml-15 mr-15">
              <span className="mr-1 hover:text-black opacity-65 hover:opacity-100 cursor-pointer">UA</span>
              <span className="opacity-65">|</span>
              <span className="ml-1 opacity-65 hover:opacity-100 cursor-pointer">EN</span>
            </div>

            <NavItem>Оплата/Доставка</NavItem>
            <NavItem>Акції</NavItem>
            <NavItem>Співпраця</NavItem>
            <NavItem>Оптовикам</NavItem>
            <NavItem>Контакти</NavItem>
          </ul>
          <div className="mt-8 ml-10">
            <img src={phoneIcon} alt="Зателефонувати нам" width={65} />
          </div>
          <div className="mt-5.5 block">
            <div className="font-medium text-[1.2rem] cursor-pointer">+38(093)561-21-97</div>
            <div className="opacity-65 text-[0.9rem]">Пн-Сб з 10:00 до 21:00 </div>
          </div>
          <div className="w-15 h-15 mt-5 ml-20 flex items-center justify-center rounded-md hover:bg-gray-200 hover:rounded cursor-pointer">
            <img src={heartIcon} alt="Icon" width={30} />
          </div>
          <div className="w-15 h-15 mt-5 ml-2 flex items-center justify-center rounded-md hover:bg-gray-200 hover:rounded cursor-pointer">
            <img src={basketIcon} alt="" width={30} />
          </div>
          <div className="w-15 h-15 mt-5 ml-2 flex items-center justify-center rounded-md hover:bg-gray-200 hover:rounded cursor-pointer">
            <img src={personLogOutIcon} alt="" width={30} />
          </div>
        </nav>
      </header>
      <hr className=" mt-[-0.6rem] opacity-10  h-0.5 bg-black"></hr>
    </>
  );
};

export default Header;
