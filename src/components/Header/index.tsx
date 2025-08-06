import { NavItem } from "../NavItem";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { Link } from "react-router-dom";

import phoneIcon from "./../../imgs/icons/phone_icon.jpg";
import heartIcon from "./../../imgs/icons/heart_icon.png";
import basketIcon from "./../../imgs/icons/basket_icon.jpg";
import personLogOutIcon from "./../../imgs/icons/person_icon_log_out.png";
import blackLogo from "./../../imgs/logotypes/kalyan_for_everyone.png";
import ModalWindow from "../ModalWindow";
import { useState } from "react";

const Header: React.FC = () => {
  const { totalQuantity } = useSelector((state: RootState) => state.cart);
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <header className="flex justify-center items-center p-3">
        <nav className="flex">
          <Link to="/">
            <img className="opacity-100" src={blackLogo} alt="" width={100} />
          </Link>

          <ul className="flex gap-5 items-center font-medium">
            <div className="ml-15 mr-15">
              <span className="mr-1 hover:text-black opacity-65 hover:opacity-100 cursor-pointer">UA</span>
              <span className="opacity-65">|</span>
              <span className="ml-1 opacity-65 hover:opacity-100 cursor-pointer">EN</span>
            </div>
            <Link to="paymentAndDelivery">
              <NavItem>Оплата/Доставка</NavItem>
            </Link>
            <Link to="/">
              <NavItem>Акції</NavItem>
            </Link>
            <Link to="forPartners">
              <NavItem>Співпраця</NavItem>
            </Link>
            <Link to="forWholesalers">
              <NavItem>Оптовикам</NavItem>
            </Link>
            <Link to="/contactWithUs">
              <NavItem>Контакти</NavItem>
            </Link>
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
            <div className="relative" onClick={() => setModalActive(true)}>
              <p className="absolute left-4 bottom-3 text-white text-center h-6 w-6 bg-black rounded-[100%]">{totalQuantity}</p>
              <img src={basketIcon} alt="" width={30} />
            </div>
          </div>
          <div className="w-15 h-15 mt-5 ml-2 flex items-center justify-center rounded-md hover:bg-gray-200 hover:rounded cursor-pointer">
            <img src={personLogOutIcon} alt="" width={30} />
          </div>
        </nav>
      </header>
      <hr className=" mt-[-0.6rem] opacity-10  h-0.5 bg-black"></hr>
      <ModalWindow active={modalActive} setActive={setModalActive} />
    </>
  );
};

export default Header;
